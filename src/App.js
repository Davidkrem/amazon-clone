import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

function App() {
  return (
    //BEM
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Header />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
