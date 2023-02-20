import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Do It Today: Overcome procrastination, improve productivity and achieve more meaningful things [Paperback] Foroux, Dariusnpm"
            price={12.25}
            image="https://m.media-amazon.com/images/I/41W-o6xu2bL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            rating={4}
          />

          <Product
            id="49538094"
            title="Samsung 7 Kg 5 Star Inverter, Hygiene Steam Fully-Automatic Front Loading Washing Machine (WW70T4020EE1TL, White, Diamond Drum)"
            price={600.45}
            rating={5}
            image="https://m.media-amazon.com/images/I/41BiGivgkxL._SX342_SY445_QL70_FMwebp_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung Galaxy Tab A8 10.5 inches Display, RAM 4 GB, ROM 64 GB Expandable, Wi-Fi+LTE Tablets, Silver,SM-X205NZSEINU"
            price={112.1}
            rating={5}
            image="https://m.media-amazon.com/images/I/91afx8hEj9L._SX679_.jpg"
          />
          <Product
            id="23445930"
            title="Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Black)"
            price={85.65}
            rating={4}
            image="https://m.media-amazon.com/images/I/41FgiLFNhFL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="3254354345"
            title="Bigmuscles Nutrition Premium Gold Whey 1Kg | Isolate Whey Protein Blend [Belgian Chocolate] | USA FDA REGD. BRAND | 25g Protein Per Serving | 5.5g BCAA"
            price={55.32}
            rating={4}
            image="https://m.media-amazon.com/images/I/61iQby6TUML._SX679_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Logitech B170 Wireless Mouse, 2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black"
            price={25.1}
            rating={4}
            image="https://m.media-amazon.com/images/I/516LU0H963L._SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
