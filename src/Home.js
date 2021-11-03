import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61jx8eVXikL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="5225125"
            title="Up to 41% off Philips Hue Lighting"
            price={79.98}
            image={'https://m.media-amazon.com/images/I/41qEySHMrjL._AC_.jpg'}
            rating={2}
          />
          <Product
            id="2345678"
            title="SAMSUNG 75-Inch Class QLED Q70A Series - 4K UHD Quantum HDR Smart TV "
            price={1497.99}
            image={
              'https://www.bhphotovideo.com/images/images2500x2500/samsung_qn55q70aafxza_q70a_55_class_hdr_1620612.jpg'
            }
            rating={5}
          />

          <Product
            id="9996327"
            title="RXBAR, Chocolate Sea Salt & Blueberry Variety Pack"
            price={42.99}
            image={'https://m.media-amazon.com/images/I/511rCongzKL.jpg'}
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="3267842"
            title="Introducing Amazon Smart Air Quality Monitor – Know your air, Works with Alexa"
            price={69.99}
            image={'https://www.reviewgeek.com/p/uploads/2021/11/d642f8c3.png'}
            rating={6}
          />
          <Product
            id="66569711"
            title="Colgate Optic White Overnight Teeth Whitening Pen, Teeth Stain Remover to Whiten Teeth"
            price={17.49}
            image={'https://m.media-amazon.com/images/I/41JfKuuDSfL.jpg'}
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="1178364"
            title="Up to 305 off Greenworks Outdoor Tools"
            price={339.3}
            image={
              'https://m.media-amazon.com/images/I/711bs7A5ffS._AC_SX425_.jpg'
            }
            rating={4}
          />
          <Product
            id="98874552"
            title="Amazon Basics Heavy Duty Sponges, 6-Pack"
            price={4.48}
            image={
              'https://m.media-amazon.com/images/I/81daR4Rg+fL._AC_SL1500_.jpg'
            }
            rating={2}
          />
          <Product
            id="98874552"
            title="Amazon Basics Heavy Duty Silicone Sponges, 6-Pack"
            price={4.25}
            image={
              'https://m.media-amazon.com/images/I/81pvImkAWYL._AC_SX466_.jpg'
            }
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
