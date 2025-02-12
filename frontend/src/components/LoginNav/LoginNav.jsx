import { Link } from "react-router-dom";
import "./LoginNav.css";

const LoginNav = () => {
  return (
    <nav className="navbar">
      <div className="logo">DELIVEROO</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        </ul>
    </nav>
  );
};

export default LoginNav;
