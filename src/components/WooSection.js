import React from "react";
import { Card, Button } from "react-bootstrap";

function WooSection() {
  return (
    <div className="wooSection container-fluid">
      <div className="row">
        <div className="col-11 col-lg-8 offset-lg-3 offset-1">
          <Card className="border-0 bg-transparent flex-md-row align-items-start">
            <Card.Img className="wooSection__img" src="/images/woo-img-1.svg" />
            <Card.Body className="pt-5 mt-md-5 text-white">
              <Card.Title className="fs-3 fs-md-2">
                Develop Without Limits
              </Card.Title>
              <Card.Text>
                WooCommerce is developer friendly, too. Built with a REST API,
                WooCommerce is scalable and can integrate with virtually any
                service. Design a complex store from scratch, extend a store for
                a client, or simply add a single product to a WordPress
                site—your store, your way.
              </Card.Text>
              <button className="wooSection__button py-2 px-3 rounded-pill">
                Read the Documentation
              </button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-11 col-lg-8 offset-lg-3 offset-1 mt-4">
          <Card className="border-0 bg-transparent flex-column-reverse flex-md-row-reverse align-items-center">
            <Card.Img className="wooSection__img wooSection__img2 align-self-end" src="/images/woo-img-2.svg" />
            <Card.Body className=" pb-5 text-white">
              <Card.Title className="fs-3 fs-md-2">
                Know our Global Community
              </Card.Title>
              <Card.Text>
                WooCommerce is one of the fastest-growing eCommerce communities.
                We’re proud that the helpfulness of the community and a wealth
                of online resources are frequently cited as reasons our users
                love it. There are 80+ meetups worldwide!
              </Card.Text>
              <button className="wooSection__button py-2 px-3 rounded-pill">
                Read the Documentation
              </button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default WooSection;
