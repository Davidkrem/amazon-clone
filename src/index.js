import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer, { initialState } from './reducer';
import { StateProvider } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const options = {
  clientSecret: '{{CLIENT_SECRET}}',
};

const promise = loadStripe(
  'pk_test_51JsUjpCF7ewClYllmsCZQwlymkalHD3XDFLSq8j0DnbH2dAp9yj2qTlDfxsHvTmWWtjUl0PE42uqm8tQ6YRNpY2u00nalTyav0'
);

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={promise} options={options}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </Elements>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
