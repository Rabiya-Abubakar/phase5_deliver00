import React, { useState } from 'react';
import './contact.css'; // Ensure the CSS file is correctly placed

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here (e.g., send it to an API or handle it accordingly)
    alert('Your message has been sent!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div>
      {/* Contact Us Section */}
      <main className="contact-container">
        <section className="contact-header">
          <h1>Get in Touch with DeliverOO!</h1>
          <p>
            Questions? Compliments? Complaints?{' '}
            <span className="highlight">We're all ears!</span> Drop us a message
            and let's deliver a solution faster than our couriers can deliver your parcel!
          </p>
        </section>

        {/* Contact Form */}
        <section className="contact-form-section">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject of your message"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </section>

        {/* Contact Details */}
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
      </main>
    </div>
  );
};

export default ContactUs;
