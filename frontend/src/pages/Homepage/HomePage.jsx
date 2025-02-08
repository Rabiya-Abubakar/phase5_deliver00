import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <Header />
      <header className="hero">
        <h2>"Swift, Secure, and Reliable – Your Parcel, Our Priority!"</h2>
        <p>DeliverOO ensures fast and safe parcel delivery at your convenience.</p>
        <Link to="/contact" className="cta-button">Get in Touch</Link>
      </header>

      <section className="testimonials">
        <h3>"What Our Customers Say"</h3>
        <div className="testimonial">
          <p>"DeliverOO changed the way I send packages! Fast and efficient service every time."</p>
          <span>- Alex Johnson</span>
        </div>
        <div className="testimonial">
          <p>"The best courier service I’ve ever used! My parcels always arrive on time."</p>
          <span>- Sarah Williams</span>
        </div>
      </section>
    </div>
  );
};

< Footer />

export default Homepage;
