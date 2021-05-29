import React from "react";
import { Card } from "react-bootstrap";

function FeaturesSection() {
  return (
    <div className="features container mt-5">
      <h3 className="text-center">Your eCommerce made simple</h3>
      <div className="row mt-5 pt-4">
        <div className="col-12 col-md-4">
          <Card className="border-0 bg-transparent">
              <Card.Img src="/images/feature-1.svg" />
            <Card.Body className="ml-4 pt-2">
              <Card.Title className="features_card__header">All You Need to Start</Card.Title>
              <Card.Text>
              Add WooCommerce plugin to any WordPress site and set up a new store in minutes.
              </Card.Text>
              <a href="#">Ecommerce for Wordpress ›</a>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-4">
          <Card className="border-0 bg-transparent">
              <Card.Img src="/images/feature-2.svg" />
            <Card.Body className="p-0">
              <Card.Title className="features_card__header">Customize and Extend</Card.Title>
              <Card.Text>
              From subscriptions to gym classes to luxury cars, WooCommerce is fully customizable.
              </Card.Text>
              <a href="#">Browse Extensions ›</a>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-4">
          <Card className="border-0 bg-transparent">
              <Card.Img src="/images/feature-3.svg" />
            <Card.Body className="p-0">
              <Card.Title className="features_card__header">Active Community</Card.Title>
              <Card.Text>
              WooCommerce is one of the fastest-growing eCommerce communities.
              </Card.Text>
              <a href="#">Check our Forums ›</a>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
