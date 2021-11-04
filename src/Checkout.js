import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/Holiday/EarlyBlackFriday/LandingPage/BFCM21_Phase2_EBF_hero_banner_short_desktop_1500x150.gif"
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
