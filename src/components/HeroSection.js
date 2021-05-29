import React from "react";
import { Button } from "react-bootstrap";


function HeroSection() {
  return (
    <div className="heroSection container-fluid mt-5">
      <div className="row">
        <div className="col-11 col-md-6 offset-1 pt-3 pt-md-5">
          <h1>Building exactly the eCommerce website you want.</h1>
          <p>
            WooCommerce is a customizable, open-source eCommerce platform built
            on WordPress. Get started quickly and make your way.
          </p>
          <div className="heroSection__button">
            <Button className="rounded-pill">Start a New Store</Button>
            <span className="ml-2">
              {" "}
              or <a href="#"> Customize &amp; Extend › </a>{" "}
            </span>
          </div>
        </div>
        <div className="col d-none d-md-block">
            <img 
                src="/images/featured-image.svg"
            />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
