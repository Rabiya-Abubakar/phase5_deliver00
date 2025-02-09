import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TrackMyOrderPage = () => {
  const { orderId } = useParams(); // Get Order ID from URL (optional, if you want URL-based fetching)
  const [inputOrderId, setInputOrderId] = useState(""); // State for the user input
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTrackOrder = async () => {
    if (!inputOrderId) {
      setError("Please enter an order ID.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/v1/parcels/${inputOrderId}`);
      if (!response.ok) {
        throw new Error("Order not found.");
      }

      const data = await response.json();
      setOrderDetails(data);
    } catch (error) {
      setError(error.message);
      setOrderDetails(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Track Your Order</h1>

      {/* Input field to enter order number */}
      <div>
        <label htmlFor="orderId">Enter Order ID:</label>
        <input
          type="text"
          id="orderId"
          value={inputOrderId}
          onChange={(e) => setInputOrderId(e.target.value)} // Update state on input change
          placeholder="Enter Order ID"
        />
        <button onClick={handleTrackOrder}>Track Order</button>
      </div>

      {loading && <p>Loading order details...</p>}
      
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display order details if available */}
      {orderDetails && !loading && (
        <div>
          <h3>Order Details for {inputOrderId}</h3>
          <pre>{JSON.stringify(orderDetails, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default TrackMyOrderPage;
