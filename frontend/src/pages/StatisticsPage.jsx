import React, { useState, useEffect } from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts"; // Recharts for graph

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [filteredOrders, setFilteredOrders] = useState([]); // Track filtered orders
  const [status, setStatus] = useState(""); // Track selected status
  const [activeButton, setActiveButton] = useState(""); // Track active button

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const userId = localStorage.getItem("user_id");
        const response = await fetch(
          // `http://127.0.0.1:5000/api/v1/users/${userId}/parcels`
          `https://phase5-deliver00.onrender.com/api/v1/users/${userId}/parcels`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }

        const data = await response.json();
        setOrders(data.parcels); // Set the fetched parcels data to state
        setFilteredOrders(data.parcels); // Set filtered orders initially
      } catch (err) {
        console.error("Error fetching orders:", err);
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };

    fetchOrders();
  }, []);

  const handleStatusFilter = (status) => {
    setStatus(status);
    setActiveButton(status); // Set active button on click
    if (status === "") {
      setFilteredOrders(orders);
    } else {
      const filtered = orders.filter((order) => order.status.toLowerCase() === status.toLowerCase());
      setFilteredOrders(filtered);
    }
  };

  // Prepare data for Pie chart based on order statuses
  const orderStats = orders.reduce((acc, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(orderStats).map((status) => ({
    name: status,
    value: orderStats[status],
  }));

  // Custom Pie chart colors
  const COLORS = ["#FF6347", "#32CD32", "#FFD700", "#8A2BE2"]; // Custom colors

  return (
    <div style={{ padding: "100px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "2em", marginBottom: "100px" }}>Order Statistics</h1>

      {/* Filter buttons */}
      <div style={{ marginBottom: "20px" }}>
        <button
          style={{
            margin: "5px", 
            padding: "10px 15px", 
            border: "1px solid #ccc", 
            cursor: "pointer", 
            borderRadius: "5px", 
            backgroundColor: activeButton === "" ? "#3498db" : "#f4f4f4", // Blue for active
            color: activeButton === "" ? "black" : "",
          }}
          onClick={() => handleStatusFilter("")}
        >
          All
        </button>
        <button
          style={{
            margin: "5px", 
            padding: "10px 15px", 
            border: "1px solid #ccc", 
            cursor: "pointer", 
            borderRadius: "5px", 
            backgroundColor: activeButton === "delivered" ? "#3498db" : "#f4f4f4", // Blue for active
            color: activeButton === "delivered" ? "black" : "",
          }}
          onClick={() => handleStatusFilter("delivered")}
        >
          Delivered
        </button>
        <button
          style={{
            margin: "5px", 
            padding: "10px 15px", 
            border: "1px solid #ccc", 
            cursor: "pointer", 
            borderRadius: "5px", 
            backgroundColor: activeButton === "pending" ? "#3498db" : "#f4f4f4", // Blue for active
            color: activeButton === "pending" ? "black" : "",
          }}
          onClick={() => handleStatusFilter("pending")}
        >
          Pending
        </button>
        <button
          style={{
            margin: "5px", 
            padding: "10px 15px", 
            border: "1px solid #ccc", 
            cursor: "pointer", 
            borderRadius: "5px", 
            backgroundColor: activeButton === "canceled" ? "#3498db" : "#f4f4f4", // Blue for active
            color: activeButton === "canceled" ? "white" : "",
          }}
          onClick={() => handleStatusFilter("canceled")}
        >
          Cancelled
        </button>
      </div>

      {loading ? (
        <p>Loading orders...</p>
      ) : (
        <div>
          {/* Pie chart visualization */}
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default MyOrdersPage;
