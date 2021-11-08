import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Orders from './Orders';
import Login from './Login';
import Payment from './Payment';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51JsUjpCF7ewClYllmsCZQwlymkalHD3XDFLSq8j0DnbH2dAp9yj2qTlDfxsHvTmWWtjUl0PE42uqm8tQ6YRNpY2u00nalTyav0'
);

function App() {
  const [{}, dispatch] = useStateValue('');
  const options = {
    clientSecret: '{{CLIENT_SECRET}}',
  };

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('User is ...', authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM

    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Header />
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/payment" element={<Payment />} />
          <Elements stripe={promise} options={options}>
            <Payment />
          </Elements>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
