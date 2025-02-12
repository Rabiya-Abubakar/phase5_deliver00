import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import Footer from "../Footer/Footer";
import LoginNav from "../LoginNav/LoginNav";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   //const LOGIN_API_URL = "http://localhost:5000/api/v1/auth/login";
  const LOGIN_API_URL = "https://phase5-deliver00.onrender.com/api/v1/auth/login";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(LOGIN_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        const token = data.token;
        const user_id = data.user_id;
        const role = data.role;
        if (token) {
          localStorage.setItem("authToken", token);
          localStorage.setItem("user_id", user_id);
          localStorage.setItem("user_role", role);
          window.location.href = "/dashboard";
        }
      } else {
        console.log("FAILED");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {/* <LoginNav/> */}
    <div className="login-page">
      {/* Info Section */}
      {/* <div className="info-section">
        <h2>Welcome to Our Platform</h2>
        <p>
          Sign in to explore personalized experiences and unlock new opportunities.
        </p>
      </div> */}

      {/* Login Form */}
      <div className="login-container">
      <div className="info-gab">
        <h2 className="info-titlegab">Welcome to Our Platform</h2>
        <p>
          Sign in to explore personalized experiences and unlock new opportunities.
        </p>
      </div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-button">
            <button type="submit">Login</button>
          </div>
        </form>

        <div className="signup-link">
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Login;
