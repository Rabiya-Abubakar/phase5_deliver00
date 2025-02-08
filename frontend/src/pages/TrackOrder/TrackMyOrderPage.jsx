// import React, { useState } from "react";
// import "./TrackMyOrderPage.css"; // Import the CSS file for styling

// const TrackMyOrderPage = () => {
//   const [orderId, setOrderId] = useState(""); // State to store the entered order ID
//   const [trackingStatus, setTrackingStatus] = useState(null); // State to store tracking status
//   const [errorMessage, setErrorMessage] = useState(""); // State to handle error messages

//   // Simulated tracking data (you would replace this with an actual API call)
//   const trackingData = {
//     ORD12345: {
//       status: "In Transit",
//       location: "Nairobi, Kenya",
//       estimatedDelivery: "2025-02-05",
//     },
//     ORD67890: {
//       status: "Delivered",
//       location: "Mombasa, Kenya",
//       estimatedDelivery: "2025-01-28",
//     },
//     ORD11223: {
//       status: "Pending",
//       location: "Kisumu, Kenya",
//       estimatedDelivery: "TBD",
//     },
//   };

//   // Handle tracking
//   const handleTrackOrder = () => {
//     if (trackingData[orderId]) {
//       setTrackingStatus(trackingData[orderId]);
//       setErrorMessage(""); // Reset error message if valid order ID
//     } else {
//       setTrackingStatus(null);
//       setErrorMessage("Order ID not found. Please try again.");
//     }
//   };

//   return (
//     <div className="track-order-container">
//       <h1>Track Your Order</h1>
//       <div className="track-order-form">
//         <label htmlFor="orderId">Enter Order ID:</label>
//         <input
//           type="text"
//           id="orderId"
//           value={orderId}
//           onChange={(e) => setOrderId(e.target.value)}
//           placeholder="Enter Order ID"
//         />
//         <button className="track-button" onClick={handleTrackOrder}>
//           Track
//         </button>
//       </div>

//       {errorMessage && <p className="error-message">{errorMessage}</p>}

//       {trackingStatus && (
//         <div className="order-status-card">
//           <h3>Order ID: {orderId}</h3>
//           <p>
//             <strong>Status:</strong> {trackingStatus.status}
//           </p>
//           <p>
//             <strong>Current Location:</strong> {trackingStatus.location}
//           </p>
//           <p>
//             <strong>Estimated Delivery:</strong>{" "}
//             {trackingStatus.estimatedDelivery}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TrackMyOrderPage;




/* global google */
/* global google */
import React, { useState, useEffect } from "react";
import "./TrackMyOrderPage.css";

const TrackMyOrderPage = () => {
  const [orderId, setOrderId] = useState("");
  const [trackingStatus, setTrackingStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const trackingData = {
    ORD12345: {
      status: "In Transit",
      location: "Nairobi, Kenya",
      coordinates: { lat: -1.292066, lng: 36.821945 },
      destinationCoordinates: { lat: -1.18931, lng: 37.116371 },
      estimatedDelivery: "2025-02-05",
    },
    ORD67890: {
      status: "Delivered",
      location: "Mombasa, Kenya",
      coordinates: { lat: -4.043477, lng: 39.668206 },
      destinationCoordinates: { lat: -4.043477, lng: 39.668206 },
      estimatedDelivery: "2025-01-28",
    },
    ORD11223: {
      status: "Pending",
      location: "Kisumu, Kenya",
      coordinates: { lat: -0.091701, lng: 34.767956 },
      destinationCoordinates: { lat: -0.091701, lng: 34.767956 },
      estimatedDelivery: "TBD",
    },
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
//"https://maps.googleapis.com/maps/api/js?key=AIzaSyCy1XlcnnFHS_GIdzTz4CntmdcJayequwg&callback=initMap";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      initMap();
    };

    return () => {
      document.body.removeChild(script);
      delete window.initMap;
    };
  }, []);

  // Light map style array
  const lightMapStyle = [
    { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
    { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [{ color: "#bdbdbd" }],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#eeeeee" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#757575" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#e5e5e5" }],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9e9e9e" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text.fill",
      stylers: [{ color: "#757575" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#dadada" }],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{ color: "#616161" }],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9e9e9e" }],
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [{ color: "#e5e5e5" }],
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [{ color: "#eeeeee" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#c9c9c9" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9e9e9e" }],
    },
  ];

  // Initialize map with light style
  const initMap = () => {
    if (typeof google !== "undefined") {
      const defaultLocation = { lat: -1.292066, lng: 36.821945 };
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: defaultLocation,
        styles: lightMapStyle, // Apply light style here
      });

      new google.maps.Marker({
        position: defaultLocation,
        map,
        title: "Default Location",
      });

      window.mapInstance = map;
    }
  };

  useEffect(() => {
    if (trackingStatus && typeof google !== "undefined" && window.mapInstance) {
      const map = window.mapInstance;

      if (window.currentMarkers) {
        window.currentMarkers.forEach((marker) => marker.setMap(null));
      }

      const pickupMarker = new google.maps.Marker({
        position: trackingStatus.coordinates,
        map,
        title: "Current Location",
      });

      window.currentMarkers = [pickupMarker];

      if (trackingStatus.status === "In Transit") {
        const destinationMarker = new google.maps.Marker({
          position: trackingStatus.destinationCoordinates,
          map,
          title: "Destination",
        });

        const routePath = new google.maps.Polyline({
          path: [trackingStatus.coordinates, trackingStatus.destinationCoordinates],
          geodesic: true,
          strokeColor: "#FF0000",
          strokeOpacity: 1.0,
          strokeWeight: 2,
        });

        routePath.setMap(map);
        window.currentMarkers.push(destinationMarker);
      }

      map.setCenter(trackingStatus.coordinates);
      map.setZoom(8);
    }
  }, [trackingStatus]);

  const handleTrackOrder = () => {
    if (trackingData[orderId]) {
      setTrackingStatus(trackingData[orderId]);
      setErrorMessage("");
    } else {
      setTrackingStatus(null);
      setErrorMessage("Order ID not found. Please try again.");
    }
  };

  return (
    <div className="track-order-container">
      <h1>Track Your Order</h1>
      <div className="track-order-form">
        <label htmlFor="orderId">Enter Order ID:</label>
        <input
          type="text"
          id="orderId"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Enter Order ID"
        />
        <button className="track-button" onClick={handleTrackOrder}>
          Track
        </button>
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {trackingStatus && (
        <div className="order-status-card">
          <h3>Order ID: {orderId}</h3>
          <p>
            <strong>Status:</strong> {trackingStatus.status}
          </p>
          <p>
            <strong>Current Location:</strong> {trackingStatus.location}
          </p>
          <p>
            <strong>Estimated Delivery:</strong> {trackingStatus.estimatedDelivery}
          </p>
        </div>
      )}

      {/* Map Always Displayed */}
      <div id="map" style={{ height: "400px", width: "100%", marginTop: "20px" }}></div>
    </div>
  );
};

export default TrackMyOrderPage;

