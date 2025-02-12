import React from "react";

const Services = () => {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      maxWidth: "800px",
      margin: "0 auto",
      textAlign: "center",
      backgroundColor: "#1a1a1a",
      color: "#f5f5f5",
      borderRadius: "10px",
    },
    heading: {
      color: "#ffffff",
    },
    paragraph: {
      fontSize: "16px",
      lineHeight: "1.6",
      color: "#cccccc",
    },
    service: {
      backgroundColor: "#2b2b2b",
      padding: "15px",
      margin: "20px 0",
      borderRadius: "8px",
      boxShadow: "0 2px 5px rgba(255,255,255,0.1)",
      textAlign: "left",
    },
    serviceHeading: {
      color: "#f5f5f5",
    },
    serviceText: {
      fontSize: "15px",
      color: "#bbbbbb",
    },
    cta: {
      backgroundColor: "#2b2b2b", // Matching the service boxes
      padding: "20px",
      borderRadius: "8px",
      textAlign: "center",
      marginTop: "30px",
      boxShadow: "0 2px 5px rgba(255,255,255,0.1)",
    },
    btn: {
      backgroundColor: "#0b5ed7",
      color: "#fff",
      border: "none",
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "5px",
      cursor: "pointer",
      marginTop: "10px",
      transition: "background-color 0.3s ease",
    },
    btnHover: {
      backgroundColor: "#084298",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Services</h1>
      <p style={styles.paragraph}>
        At <strong>DeliverOO</strong>, we pride ourselves on delivering not just parcels but smiles. 🚀
        From the simplest deliveries to the most complex logistics, we've got you covered.
        Explore our wide range of services below:
      </p>

      <div style={styles.service}>
        <h2 style={styles.serviceHeading}>📦 Parcel Delivery</h2>
        <p style={styles.serviceText}>
          Whether it’s a birthday gift for Grandma or important documents for your office,
          we ensure your parcel gets to its destination securely and on time. Small, medium,
          or large – we handle it all!
        </p>
      </div>

      <div style={styles.service}>
        <h2 style={styles.serviceHeading}>🌍 International Shipping</h2>
        <p style={styles.serviceText}>
          Cross-border logistics made easy! Send your packages anywhere in the world
          with our reliable international shipping service. No borders can stop us
          (except maybe the ones on maps).
        </p>
      </div>

      <div style={styles.service}>
        <h2 style={styles.serviceHeading}>🚚 Same-Day Delivery</h2>
        <p style={styles.serviceText}>
          For those last-minute emergencies, we offer same-day delivery services.
          Forgot your partner’s anniversary? Don’t worry, we’ve got your back
          (and your gift) on the way!
        </p>
      </div>

      <div style={styles.service}>
        <h2 style={styles.serviceHeading}>📋 Order Tracking</h2>
        <p style={styles.serviceText}>
          Want to keep tabs on your package? With our live order tracking system,
          you’ll always know where your delivery is – down to the last kilometer.
          Track it like a pro!
        </p>
      </div>

      <div style={styles.service}>
        <h2 style={styles.serviceHeading}>⚡ Express Services</h2>
        <p style={styles.serviceText}>
          Need it there in a flash? Our express service is as quick as a wink
          and twice as reliable. Speed and efficiency are our middle names.
        </p>
      </div>

      <div style={styles.cta}>
        <p style={styles.serviceText}>Ready to experience the magic of DeliverOO?</p>
        <p style={styles.serviceText}>
          Join thousands of satisfied customers and businesses who trust us for their
          delivery needs. Click below to get started!
        </p>
        <button
          style={styles.btn}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.btnHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.btn.backgroundColor)}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Services;
