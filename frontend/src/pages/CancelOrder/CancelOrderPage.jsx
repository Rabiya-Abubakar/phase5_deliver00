import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OrderCard from "../../components/OrderCard/OrderCard";
import "./CancelOrderPage.css"; // Corrected CSS import

const CanceledOrdersPage = () => {
  const [canceledOrders, setCanceledOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCanceledOrders = async () => {
      try {
        const userId = localStorage.getItem("user_id");
        const response = await fetch(
          `http://127.0.0.1:5000/api/v1/users/${userId}/parcels`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }

        const data = await response.json();
        const filteredOrders = data.parcels.filter(
          (order) => order.status === "canceled"
        );
        setCanceledOrders(filteredOrders);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCanceledOrders();
  }, []);

  return (
    <div className="my-orders-container">
      <h1>Canceled Orders</h1>
      <p>Here are the orders that were canceled:</p>

      {loading ? (
        <p>Loading orders...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : canceledOrders.length > 0 ? (
        <div className="orders-list">
          {canceledOrders.map((order) => (
            <Link key={order.id} to={`/parcels/${order.id}`}>
              <OrderCard order={order} />
            </Link>
          ))}
        </div>
      ) : (
        <p>No canceled orders found.</p>
      )}
    </div>
  );
};

export default CanceledOrdersPage;
