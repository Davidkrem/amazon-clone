import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/smeghn/Ginger/Cat-Page-Desktop-1300x90.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your Shopping Cart</h2>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
        <h2>Subtotal here</h2>
      </div>
    </div>
  );
}

export default Checkout;
