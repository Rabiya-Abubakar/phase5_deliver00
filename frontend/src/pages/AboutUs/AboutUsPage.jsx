import React from "react";

const AboutUs = () => {
  const styles = {
    container: {
      maxWidth: "800px",
      margin: "50px auto",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      fontFamily: "Arial, sans-serif",
      color: "#333",
    },
    heading1: {
      textAlign: "center",
      fontSize: "2.5rem",
      marginBottom: "20px",
      color: "#2c3e50",
    },
    heading2: {
      fontSize: "1.8rem",
      marginTop: "20px",
      color: "#2c3e50",
    },
    paragraph: {
      fontSize: "1.1rem",
      lineHeight: "1.6",
      marginBottom: "15px",
    },
    list: {
      listStyle: "none",
      padding: 0,
    },
    listItem: {
      fontSize: "1.1rem",
      background: "#ecf0f1",
      margin: "5px 0",
      padding: "10px",
      borderRadius: "5px",
    },
    strong: {
      color: "#2980b9",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading1}>About Us</h1>
      <p style={styles.paragraph}>
        Welcome to <strong style={styles.strong}>DeliverOO</strong>! We're your go-to solution for
        fast, reliable, and hassle-free deliveries. At DeliverOO, we believe
        the world moves faster than ever, and your deliveries should too.
      </p>

      <h2 style={styles.heading2}>Our Story</h2>
      <p style={styles.paragraph}>
        Founded in <strong style={styles.strong}>2023</strong>, DeliverOO was born from a simple yet
        powerful idea: to connect people, businesses, and communities with
        seamless logistics solutions. What started as a local delivery service
        quickly grew into a trusted partner for individuals and companies
        across the country. Today, we pride ourselves on being a blend of
        cutting-edge technology and human dedication, ensuring every package
        tells a story of efficiency and care.
      </p>

      <h2 style={styles.heading2}>Our Mission</h2>
      <p style={styles.paragraph}>
        To redefine delivery services with precision, speed, and transparency,
        ensuring smiles travel with every parcel. Whether it's a surprise gift,
        a vital document, or a last-minute errand, we make it happen with flair
        and finesse.
      </p>

      <h2 style={styles.heading2}>Why Choose Us?</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <strong style={styles.strong}>Speed:</strong> Lightning-fast delivery solutions that keep up with your pace.
        </li>
        <li style={styles.listItem}>
          <strong style={styles.strong}>Reliability:</strong> A track record you can trust. Your package is in safe hands.
        </li>
        <li style={styles.listItem}>
          <strong style={styles.strong}>Transparency:</strong> Real-time tracking for peace of mind.
        </li>
        <li style={styles.listItem}>
          <strong style={styles.strong}>Innovation:</strong> We leverage the latest tech to simplify your delivery experience.
        </li>
        <li style={styles.listItem}>
          <strong style={styles.strong}>Community:</strong> We’re more than a service; we’re part of your journey.
        </li>
      </ul>

      <h2 style={styles.heading2}>Meet the Team</h2>
      <p style={styles.paragraph}>
        Our diverse team is made up of logistics experts, tech enthusiasts, and
        customer service pros who are passionate about making a difference. We
        bring together years of experience and a shared commitment to
        excellence.
      </p>

      <h2 style={styles.heading2}>What Drives Us?</h2>
      <p style={styles.paragraph}>
        It’s simple: we love the challenge of moving things from Point A to
        Point B—faster, smarter, and better. Every package we deliver is a
        testament to our promise of keeping the world connected, one delivery
        at a time.
      </p>

      <h2 style={styles.heading2}>Contact Us</h2>
      <p style={styles.paragraph}>
        Want to know more or have specific delivery needs? Reach out to us! Our
        friendly support team is here to assist you <strong style={styles.strong}>24/7</strong>. Let’s build
        something amazing together.
      </p>
    </div>
  );
};

export default AboutUs;
