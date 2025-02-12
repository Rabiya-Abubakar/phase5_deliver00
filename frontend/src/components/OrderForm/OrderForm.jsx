import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, Polyline } from 'react-leaflet';
import L from 'leaflet';
import { useNavigate } from 'react-router-dom';

const OrderForm = () => {
  const navigate = useNavigate()
  const [order, setOrder] = useState({
    origin_pin: "",
    destination_pin: "",
    weight_kg: "",
    description: "",
    user_id: "",
  });
  const [message, setMessage] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [originCoords, setOriginCoords] = useState(null);
  const [destinationCoords, setDestinationCoords] = useState(null);



  const HandleMapClick = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        const placeName = `Lat: ${lat.toFixed(5)}, Lng: ${lng.toFixed(5)}`;

        if (!originCoords) {
          setOrder({ ...order, origin_pin: placeName });
          setOriginCoords([lat, lng]);
        } else if (!destinationCoords) {
          setOrder({ ...order, destination_pin: placeName });
          setDestinationCoords([lat, lng]);
        }
      }
    });
    return null;
  };

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  
    // Set the user_id here (you can adjust based on how you get the user's ID)
    const userId = localStorage.getItem("user_id")
    useEffect(()=> {
      setOrder({ ...order, user_id: userId });

    },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!order.origin_pin || !order.destination_pin || !order.weight_kg || !order.description || !userEmail) {
      setMessage("Please fill in all fields.");
      return;
    }

    


    setIsLoading(true);
    try {
      const response = await fetch(
        // "http://127.0.0.1:5000/api/v1/parcels",
        "https://phase5-deliver00.onrender.com/api/v1/parcels",
         {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });
      if (!response.ok) throw new Error("Failed to create order");
      setMessage("Order created successfully!");
      setOrder({ origin_pin: "", destination_pin: "", weight_kg: "", description: "", user_id: order.user_id });
      setOriginCoords(null);
      setDestinationCoords(null);
      navigate('/myorders')
    } catch (error) {
      console.log(error)
      setMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="order-form-container">
      <h2>Create Order</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="origin_pin" value={order.origin_pin} onChange={handleChange} placeholder="Select your Origin from the map" required />
        <input type="text" name="destination_pin" value={order.destination_pin} onChange={handleChange} placeholder="Select your Destination from the map" required />
        <input type="number" name="weight_kg" value={order.weight_kg} onChange={handleChange} placeholder="Weight (kg)" required />
        <input type="text" name="description" value={order.description} onChange={handleChange} placeholder="Description" required />
        {/* <input type="text" name="user_id" value={order.user_id} onChange={handleChange} placeholder="User ID" required />s */}
        <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder="User Email" required />
        <button type="submit" disabled={isLoading}>{isLoading ? "Creating..." : "Create Order"}</button>
      </form>

      <MapContainer center={[-1.286389, 36.817223]} zoom={12} style={{ height: "400px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; OpenStreetMap contributors' />
        <HandleMapClick />
        {originCoords && <Marker position={originCoords} icon={new L.Icon({ iconUrl: 'your-icon-url.png', iconSize: [25, 25] })}><Popup>{order.origin_pin}</Popup></Marker>}
        {destinationCoords && <Marker position={destinationCoords} icon={new L.Icon({ iconUrl: 'your-icon-url.png', iconSize: [25, 25] })}><Popup>{order.destination_pin}</Popup></Marker>}
        {originCoords && destinationCoords && <Polyline positions={[originCoords, destinationCoords]} color="blue" weight={4} />}
      </MapContainer>
    </div>
  );
};

export default OrderForm;


