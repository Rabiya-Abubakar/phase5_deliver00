import React from "react";

const Contact = () => {
  const styles = {
    container: {
      maxWidth: "600px",
      margin: "50px auto",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      fontFamily: "Arial, sans-serif",
      color: "#333",
      textAlign: "center",
    },
    heading1: {
      fontSize: "2rem",
      marginBottom: "15px",
      color: "#2c3e50",
    },
    heading2: {
      fontSize: "1.5rem",
      marginTop: "20px",
      color: "#2c3e50",
    },
    paragraph: {
      fontSize: "1.1rem",
      lineHeight: "1.6",
      marginBottom: "15px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      marginTop: "20px",
    },
    label: {
      textAlign: "left",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "1rem",
    },
    textarea: {
      width: "100%",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "1rem",
      resize: "none",
    },
    button: {
      backgroundColor: "#2980b9",
      color: "#fff",
      padding: "10px 15px",
      border: "none",
      borderRadius: "5px",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "0.3s",
    },
    buttonHover: {
      backgroundColor: "#1f6698",
    },
    detailsContainer: {
      marginTop: "20px",
      textAlign: "left",
    },
    detailsHeading: {
      fontSize: "1.2rem",
      marginTop: "10px",
      color: "#2c3e50",
    },
    detailsParagraph: {
      fontSize: "1rem",
      marginBottom: "5px",
    },
    note: {
      fontSize: "1rem",
      fontStyle: "italic",
      marginTop: "20px",
      color: "#7f8c8d",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading1}>Get in Touch with DeliverOO!</h1>
      <p style={styles.paragraph}>
        Questions? Compliments? Complaints? We're all ears! Drop us a message
        and let's deliver a solution faster than our couriers can deliver your parcel!
      </p>

      <h2 style={styles.heading2}>📩 Send Us a Message</h2>
      <form style={styles.form}>
        <label style={styles.label}>Your Name</label>
        <input type="text" placeholder="John Doe" required style={styles.input} />

        <label style={styles.label}>Your Email</label>
        <input type="email" placeholder="johndoe@example.com" required style={styles.input} />

        <label style={styles.label}>Subject</label>
        <input type="text" placeholder="Subject of your message" required style={styles.input} />

        <label style={styles.label}>Your Message</label>
        <textarea placeholder="Type your message here..." rows="5" required style={styles.textarea}></textarea>

        <button type="submit" style={styles.button}>Send Message</button>
      </form>

      <h2 style={styles.heading2}>📞 Reach Out to Us</h2>
      <div style={styles.detailsContainer}>
        <h3 style={styles.detailsHeading}>📍 Visit Us</h3>
        <p style={styles.detailsParagraph}>123 DeliverOO Lane, Fast City, Swiftland</p>

        <h3 style={styles.detailsHeading}>📞 Call Us</h3>
        <p style={styles.detailsParagraph}>+1 234 567 890</p>

        <h3 style={styles.detailsHeading}>📧 Email Us</h3>
        <p style={styles.detailsParagraph}>support@deliveroo.com</p>

        <h3 style={styles.detailsHeading}>⏰ Office Hours</h3>
        <p style={styles.detailsParagraph}>Monday - Friday: 8:00 AM - 8:00 PM</p>
        <p style={styles.detailsParagraph}>Saturday - Sunday: 10:00 AM - 6:00 PM</p>
      </div>

      <p style={styles.note}>
        Can't get through? We might be busy riding through the traffic! Try again or
        send a carrier pigeon (results may vary). 🚴‍♂️💨
      </p>
    </div>
  );
};

export default Contact;
