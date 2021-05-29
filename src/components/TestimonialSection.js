import React from "react";

const RenderTestimonialCard = () => {
  return (
    <>
      <div className="testimonial__card position-relative">
        <p>
          {" "}
          No other eCommerce platform allows people to start for free and grow
          their store as their business grows. More importantly, WooCommerce
          doesn't charge you a portion of your profits as your business grows!{" "}
        </p>
      </div>
      <div
        className="testimonial__card testimonial__card--inner"
        style={{ transform: "translateY(12%) scale(0.9)", zIndex: 2 }}
      ></div>
      <div
        className="testimonial__card testimonial__card--inner"
        style={{ transform: "translateY(22%) scale(0.8)", zIndex: 1 }}
      ></div>
    </>
  );
};

const RenderTestimonialLarge = () => {
  return (
    <div className="testimonial container-fluid py-5  d-none d-md-block">
      <div className="row">
        <div className="col-4 offset-2 align-self-center">
          <img src="/images/testimonial-4.png" />
        </div>
        <div className="col-4 offset-2 align-self-center">
          <img src="/images/testimonial-5.png" />
        </div>
      </div>
      <div className="row">
        <div className="col-4 align-self-center">
          <img src="/images/testimonial-1.png" />
        </div>
        <div className="col-4 position-relative">
          <RenderTestimonialCard />
        </div>
        <div className="col-4 align-self-center">
          <img className="ml-auto" src="/images/testimonial-3.png" />
        </div>
      </div>
      <div className="row">
        <div className="col-4 offset-2 align-self-center">
          <img src="/images/testimonial-6.png" />
        </div>
        <div className="col-4 offset-2 align-self-center">
          <img src="/images/testimonial-2.png" />
        </div>
      </div>
    </div>
  );
};

const RenderTestimonialSmall = () => {
  return (
    <div className="testimonial container-fluid py-4  d-block d-md-none">
      <div className="row">
        <div className="col-2 ">
          <img src="/images/testimonial-4.png" />
        </div>
        <div className="col-2 ">
          <img src="/images/testimonial-5.png" />
        </div>

        <div className="col-2">
          <img src="/images/testimonial-1.png" />
        </div>
        <div className="col-2">
          <img className="" src="/images/testimonial-3.png" />
        </div>

        <div className="col-2 ">
          <img src="/images/testimonial-6.png" />
        </div>
        <div className="col-2 ">
          <img src="/images/testimonial-2.png" />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col position-relative">
            <RenderTestimonialCard />
        </div>
      </div>
    </div>
  );
};

function TestimonialSection() {
  return (
    <>
      <RenderTestimonialLarge />
      <RenderTestimonialSmall />
    </>
  );
}

export default TestimonialSection;
