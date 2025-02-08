import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Autocomplete, DirectionsRenderer } from "@react-google-maps/api";
import './tracking-order.css'; // Ensure correct CSS path

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: -1.286389, // Default latitude (Nairobi)
  lng: 36.817223, // Default longitude (Nairobi)
};

const Maps = () => {
  const [map, setMap] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const [directions, setDirections] = useState(null);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [filter, setFilter] = useState('all');

  const orderData = [
    { orderNumber: '123456', route: 'Nairobi to Mombasa', status: 'enroute', distanceCovered: '300km', totalDistance: '500km', estimatedTime: '5hrs', timeCovered: '3hrs', timeRemaining: '2hrs' },
    { orderNumber: '16735', route: 'Nairobi to Kisii', status: 'enroute', distanceCovered: '400km', totalDistance: '500km', estimatedTime: '6hrs', timeCovered: '3hrs', timeRemaining: '3hrs' },
    { orderNumber: '1236786', route: 'Kisumu to Mombasa', status: 'delivered', distanceCovered: '1000km', totalDistance: '1000km', estimatedTime: '10hrs', timeCovered: '10hrs', timeRemaining: '0hrs' },
  ];

  const handlePlaceSelect = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      setOrigin(place.formatted_address);
    }
  };

  const handleDirection = () => {
    if (!origin || !destination) {
      alert("Please enter both origin and destination.");
      return;
    }
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      { origin, destination, travelMode: window.google.maps.TravelMode.DRIVING },
      (result, status) => {
        if (status === "OK") {
          setDirections(result);
        } else {
          alert("Error fetching directions: " + status);
        }
      }
    );
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} libraries={["places"]}>
      <div className="tracking-container">
        <h1>Order Tracking & Route Navigation</h1>
        <div className="input-container">
          <Autocomplete onLoad={setAutocomplete} onPlaceChanged={handlePlaceSelect}>
            <input type="text" placeholder="Enter Origin" value={origin} onChange={(e) => setOrigin(e.target.value)} />
          </Autocomplete>
          <input type="text" placeholder="Enter Destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
          <button onClick={handleDirection}>Get Directions</button>
        </div>

        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} onLoad={(map) => setMap(map)}>
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>

        <div className="filter-buttons">
          <button className="btn all-btn" onClick={() => setFilter('all')}>All</button>
          <button className="btn enroute-btn" onClick={() => setFilter('enroute')}>Enroute</button>
          <button className="btn delivered-btn" onClick={() => setFilter('delivered')}>Delivered</button>
        </div>

        <div id="order-list" className="order-list">
          {orderData.filter(order => filter === 'all' || order.status === filter).map((order, index) => (
            <div key={index} className="order-segment" data-status={order.status}>
              <div className="order-header">
                <p><strong>Order Number:</strong> #{order.orderNumber}</p>
                <p className={`status ${order.status}`}>{order.status}</p>
              </div>
              <p><strong>Route:</strong> {order.route}</p>
              <div className="distance-info">
                <p>Distance Covered: {order.distanceCovered}</p>
                <p>Total Distance: {order.totalDistance} (Estimated Time: {order.estimatedTime})</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LoadScript>
  );
};

export default Maps;
