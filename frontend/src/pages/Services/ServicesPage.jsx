import React from 'react';
import './ServicesPage.css'; // Make sure to place your CSS file in the correct location

const Services = () => {
  return (
    <div>
      
      <main className="services-content">
        <section className="intro">
          <h2>Our Services</h2>
          <p>
            At DeliverOO, we pride ourselves on delivering not just parcels but smiles. 🚀 From the simplest deliveries to the most complex logistics, we've got you covered. Explore our wide range of services below:
          </p>
        </section>

        <section className="service-list">
          {/* Service 1 */}
          <div className="service-card">
            <h3>📦 Parcel Delivery</h3>
            <p>
              Whether it’s a birthday gift for Grandma or important documents for your office, we ensure your parcel gets to its destination securely and on time. Small, medium, or large – we handle it all!
            </p>
          </div>

          {/* Service 2 */}
          <div className="service-card">
            <h3>🌍 International Shipping</h3>
            <p>
              Cross-border logistics made easy! Send your packages anywhere in the world with our reliable international shipping service. No borders can stop us (except maybe the ones on maps).
            </p>
          </div>

          {/* Service 3 */}
          <div className="service-card">
            <h3>🚚 Same-Day Delivery</h3>
            <p>
              For those last-minute emergencies, we offer same-day delivery services. Forgot your partner’s anniversary? Don’t worry, we’ve got your back (and your gift) on the way!
            </p>
          </div>

          {/* Service 4 */}
          <div className="service-card">
            <h3>📋 Order Tracking</h3>
            <p>
              Want to keep tabs on your package? With our live order tracking system, you’ll always know where your delivery is – down to the last kilometer. Track it like a pro!
            </p>
          </div>

          {/* Service 5 */}
          <div className="service-card">
            <h3>⚡ Express Services</h3>
            <p>
              Need it there in a flash? Our express service is as quick as a wink and twice as reliable. Speed and efficiency are our middle names.
            </p>
          </div>
        </section>

        <section className="call-to-action">
          <h3>Ready to experience the magic of DeliverOO?</h3>
          <p>
            Join thousands of satisfied customers and businesses who trust us for their delivery needs. Click below to get started!
          </p>
          <button
            onClick={() => window.location.href = '/signup'}
            className="cta-button"
          >
            Sign Up Now
          </button>
        </section>
      </main>

    </div>
  );
};

export default Services;
