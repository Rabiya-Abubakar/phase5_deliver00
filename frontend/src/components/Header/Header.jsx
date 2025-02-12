import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";

const Header = () => {
  return (
    <div className="heda">
      <div className="heda-logo">
        <p><strong>DeliverOO</strong></p>
      </div>
      <ul className="heda-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contactus">Contact</Link></li>
        <li><Link to="/faqs">FAQs</Link></li>
      </ul>

      <div className="btn-sign">
        <a href="/signup" >Sign Up</a>
        </div>
        <div className="btn-login">
        <a href="/login" >Login</a>
        </div>
    </div>
  );
};

export default Header;
