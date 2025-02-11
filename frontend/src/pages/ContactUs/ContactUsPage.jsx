import React from "react";
import "./ContactUsPage.css"; // Import the CSS file for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Get in Touch with DeliverOO!</h1>
      <p>
        Questions? Compliments? Complaints? We're all ears! Drop us a message 
        and let's deliver a solution faster than our couriers can deliver your parcel!
      </p>

      <h2>📩 Send Us a Message</h2>
      <form className="contact-form">
        <label>Your Name</label>
        <input type="text" placeholder="John Doe" required />

        <label>Your Email</label>
        <input type="email" placeholder="johndoe@example.com" required />

        <label>Subject</label>
        <input type="text" placeholder="Subject of your message" required />

        <label>Your Message</label>
        <textarea placeholder="Type your message here..." rows="5" required></textarea>

        <button type="submit" className="btn">Send Message</button>
      </form>

      <h2>📞 Reach Out to Us</h2>
      <div className="contact-details">
        <h3>📍 Visit Us</h3>
        <p>123 DeliverOO Lane, Fast City, Swiftland</p>

        <h3>📞 Call Us</h3>
        <p>+1 234 567 890</p>

        <h3>📧 Email Us</h3>
        <p>support@deliveroo.com</p>

        <h3>⏰ Office Hours</h3>
        <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
        <p>Saturday - Sunday: 10:00 AM - 6:00 PM</p>
      </div>

      <p className="note">
        Can't get through? We might be busy riding through the traffic! Try again or 
        send a carrier pigeon (results may vary). 🚴‍♂️💨
      </p>
    </div>
  );
};

export default Contact;
