import React from "react";
import "./ContactUsPage.css"; // Import the CSS file for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <section className="contact-header">
      <h1>Get in Touch with DeliverOO!</h1>
      <p>
        Questions? Compliments? Complaints? <span className="highlight">We're all ears!</span> Drop us a message 
        and let's deliver a solution faster than our couriers can deliver your parcel!
      </p>
      </section>
      

      <section className="contact-form-section">
      <h2>📩 Send Us a Message</h2>
      <form className="contact-form-section">
        <label>Your Name</label>
        <input type="text" placeholder="John Doe" required />

        <label>Your Email</label>
        <input type="email" placeholder="johndoe@example.com" required />

        <label>Subject</label>
        <input type="text" placeholder="Subject of your message" required />

        <label>Your Message</label>
        <textarea className="textarea"  placeholder="Type your message here..." rows="5" required></textarea>

        <button type="submit" className="btn">Send Message</button>
      </form>
      </section>

       <section className="contact-details">
          <h2>Reach Out to Us</h2>
          <div className="details-grid">
            <div className="detail">
              <h3>📍 Visit Us</h3>
              <p>123 DeliverOO Lane<br />Fast City, Swiftland</p>
            </div>
            <div className="detail">
              <h3>📞 Call Us</h3>
              <p>
                <a href="tel:+1234567890">+1 234 567 890</a>
              </p>
            </div>
            <div className="detail">
              <h3>📧 Email Us</h3>
              <p>
                <a href="mailto:support@deliveroo.com">support@deliveroo.com</a>
              </p>
            </div>
            <div className="detail">
              <h3>⏰ Office Hours</h3>
              <p>
                Monday - Friday: 8:00 AM - 8:00 PM<br />
                Saturday - Sunday: 10:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </section>

        {/* Fun Footer */}
        <footer className="contact-footer">
          <p>
            Can't get through? We might be busy riding through the traffic! Try again or send a carrier pigeon (results may vary). 🚴‍♂️💨
          </p>
        </footer>
    </div>
  );
};

export default Contact;
