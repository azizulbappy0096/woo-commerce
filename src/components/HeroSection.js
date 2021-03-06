import React from "react";
import { Button } from "react-bootstrap";


function HeroSection() {
  return (
    <div className="heroSection container-fluid z-10 pt-20">
      <div className="row justify-content-center">
        <div className="col-11 col-md-6 offset-1 pt-3 pt-md-5 self-center">
          <h1>Building exactly the eCommerce website you want.</h1>
          <p>
            WooCommerce is a customizable, open-source eCommerce platform built
            on WordPress. Get started quickly and make your way.
          </p>
          <div className="heroSection__button">
            <button className="p-2 rounded-pill">Start a New Store</button>
            <span className="ml-2 d-block d-md-inline mt-2 mt-md-0">
              {" "}
              or <a href="#"> Customize &amp; Extend › </a>{" "}
            </span>
          </div>
        </div>
        <div className="col d-none d-md-block" style={{ paddingRight: 0 }} >
            <img 
                src="/images/featured-image.svg"
            />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
