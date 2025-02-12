import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Polyline, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const TrackMyOrderPage = () => {
  const [parcelData, setParcelData] = useState(null);
  const [route, setRoute] = useState([]);
  const [parcelPosition, setParcelPosition] = useState(null);
  const [totalDistance, setTotalDistance] = useState(null);
  const [remainingDistance, setRemainingDistance] = useState(null);
  const [estimatedTime, setEstimatedTime] = useState(null);
  const [remainingTime, setRemainingTime] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [orderNumber, setOrderNumber] = useState("");

  const fetchParcelData = async () => {
    setLoading(true);
    setError("");

    try {
      // Simulated API response
      const jsonResponse = {
        parcel: {
          description: "Working machines",
          destination_pin: "Lat: -1.26030, Lng: 36.88402",
          id: orderNumber || 44, // Use entered order number if available
          origin_pin: "Lat: -1.23593, Lng: 36.80780",
          status: "pending",
          weight_kg: 30,
        },
      };

      const { origin_pin, destination_pin } = jsonResponse.parcel;

      // Extract latitude & longitude
      const originCoords = origin_pin.match(/-?\d+\.\d+/g).map(Number);
      const destinationCoords = destination_pin.match(/-?\d+\.\d+/g).map(Number);

      if (!originCoords || !destinationCoords) {
        setError("Invalid coordinates format.");
        setLoading(false);
        return;
      }

      setParcelData(jsonResponse.parcel);

      console.log("Coordinates:", { originCoords, destinationCoords });

      // Fetch route from Open Source Routing Machine (OSRM)
      const routeResponse = await fetch(
        `https://router.project-osrm.org/route/v1/driving/${originCoords[1]},${originCoords[0]};${destinationCoords[1]},${destinationCoords[0]}?overview=full&geometries=geojson`
      );
      const routeData = await routeResponse.json();
      console.log("Route Data:", routeData);

      if (routeData.routes?.length > 0) {
        const routeCoords = routeData.routes[0].geometry.coordinates.map(coord => [coord[1], coord[0]]);
        const distanceKm = (routeData.routes[0].distance / 1000).toFixed(2); // Convert to km
        const durationMin = Math.ceil(routeData.routes[0].duration / 60); // Convert seconds to minutes

        setRoute(routeCoords);
        setTotalDistance(distanceKm);
        setRemainingDistance(distanceKm);
        setEstimatedTime(durationMin);
        setRemainingTime(durationMin);

        animateParcelMovement(routeCoords, routeData.routes[0].distance, routeData.routes[0].duration);
      } else {
        setError("Could not retrieve a valid route.");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const animateParcelMovement = (routeCoords, totalDistanceMeters, totalDurationSeconds) => {
    let index = 0;
    const intervalMs = (totalDurationSeconds / routeCoords.length) * 1000; // Time per segment
    const distancePerSegment = totalDistanceMeters / routeCoords.length / 1000; // Convert to km

    const moveParcel = () => {
      if (index < routeCoords.length) {
        setParcelPosition(routeCoords[index]);

        // Update remaining distance & time
        setRemainingDistance(prev => (prev - distancePerSegment).toFixed(2));
        setRemainingTime(prev => Math.max(0, prev - Math.ceil(totalDurationSeconds / routeCoords.length / 60)));

        index++;
        setTimeout(moveParcel, intervalMs);
      }
    };

    moveParcel();
  };

  useEffect(() => {
    if (orderNumber) {
      fetchParcelData();
    }
  }, [orderNumber]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Track Your Order</h1>
      
      {/* Order Number Input */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter Order Number"
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginRight: "10px",
          }}
        />
        <button
          onClick={fetchParcelData}
          style={{
            padding: "10px 15px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Track Order
        </button>
      </div>

      {loading && <p>Loading order details...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {parcelData && !loading && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start", // Aligns content to the left
            justifyContent: "center",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            maxWidth: "300px",
            margin: "0 auto 20px 0", // Moves the box slightly left
            backgroundColor: "beige",
          }}
        >
          <h3>Order Details for ID: {parcelData.id}</h3>
          <p><strong>Description:</strong> {parcelData.description}</p>
          <p><strong>Weight:</strong> {parcelData.weight_kg} kg</p>
          <p><strong>Status:</strong> {parcelData.status}</p>
          <p><strong>Total Distance:</strong> {totalDistance} km</p>
          <p><strong>Estimated Time:</strong> {estimatedTime} min</p>
          <p><strong>Remaining Distance:</strong> {remainingDistance} km</p>
          <p><strong>Remaining Time:</strong> {remainingTime} min</p>
        </div>
      )}

      <div style={{ height: "500px", width: "100%", marginTop: "20px" }}>
        <MapContainer center={[-1.286389, 36.817223]} zoom={12} style={{ height: "100%", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {/* Origin Marker */}
          <Marker position={route[0] || [-1.23593, 36.80780]}>
            <Popup>Origin</Popup>
          </Marker>

          {/* Destination Marker */}
          <Marker position={route[route.length - 1] || [-1.26030, 36.88402]}>
            <Popup>Destination</Popup>
          </Marker>

          {/* Route Path */}
          {route.length > 0 && <Polyline positions={route} color="blue" />}

          {/* Moving Parcel Marker */}
          {parcelPosition && (
            <Marker position={parcelPosition}>
              <Popup>Parcel is here</Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default TrackMyOrderPage;
