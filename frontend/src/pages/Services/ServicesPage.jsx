import React from "react";
import "./ServicesPage.css"; // Import the CSS file for styling

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <p>
        At <strong>DeliverOO</strong>, we pride ourselves on delivering not just parcels but smiles. 🚀 
        From the simplest deliveries to the most complex logistics, we've got you covered. 
        Explore our wide range of services below:
      </p>

      <div className="service">
        <h2>📦 Parcel Delivery</h2>
        <p>
          Whether it’s a birthday gift for Grandma or important documents for your office, 
          we ensure your parcel gets to its destination securely and on time. Small, medium, 
          or large – we handle it all!
        </p>
      </div>

      <div className="service">
        <h2>🌍 International Shipping</h2>
        <p>
          Cross-border logistics made easy! Send your packages anywhere in the world 
          with our reliable international shipping service. No borders can stop us 
          (except maybe the ones on maps).
        </p>
      </div>

      <div className="service">
        <h2>🚚 Same-Day Delivery</h2>
        <p>
          For those last-minute emergencies, we offer same-day delivery services. 
          Forgot your partner’s anniversary? Don’t worry, we’ve got your back 
          (and your gift) on the way!
        </p>
      </div>

      <div className="service">
        <h2>📋 Order Tracking</h2>
        <p>
          Want to keep tabs on your package? With our live order tracking system, 
          you’ll always know where your delivery is – down to the last kilometer. 
          Track it like a pro!
        </p>
      </div>

      <div className="service">
        <h2>⚡ Express Services</h2>
        <p>
          Need it there in a flash? Our express service is as quick as a wink 
          and twice as reliable. Speed and efficiency are our middle names.
        </p>
      </div>

      <div className="cta">
        <p>Ready to experience the magic of DeliverOO?</p>
        <p>
          Join thousands of satisfied customers and businesses who trust us for their 
          delivery needs. Click below to get started!
        </p>
        <button className="btn">Get Started</button>
      </div>
    </div>
  );
};

export default Services;
