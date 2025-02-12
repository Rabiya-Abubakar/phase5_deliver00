import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file for styling

const Navbar = () => {
  const userRole = localStorage.getItem('user_role')
  return (
    <nav className="navbar">
      <div>
        <h1>
        <Link to="/dashboard" className="navbar-title" >
          My Dashboard
        </Link></h1>
      </div>
      <div className="navbar-links">
        <Link to="/createorder" className="navbar-link">
          Create Order
        </Link>
        { userRole === 'admin' &&
        <Link to="/orders" className="navbar-link">
          All Orders
        </Link>}

        { userRole === 'admin' &&
        <Link to="/users" className="navbar-link">
          All Users
        </Link>}

        <Link to="/trackorder" className="navbar-link">
          Track Order
        </Link>
        <Link to="/myorders" className="navbar-link">
          My Orders
        </Link>
        <Link to="/" className="navbar-link login">
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
