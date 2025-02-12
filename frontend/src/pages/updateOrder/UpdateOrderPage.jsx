import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Polyline, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const UpdateOrderPage = () => {
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
  const [destination, setDestination] = useState(null);

  const defaultOrigin = [-1.23593, 36.80780];  // Default origin
  const defaultDestination = [-1.26030, 36.88402];  // Default destination
  const API_BASE_URL = "http://localhost:5000/api/v1"; // Adjust to your backend URL

  // Fetch parcel data and route from the API
  const fetchParcelData = async (destinationCoords) => {
    if (!orderNumber) {
      setError("Please enter an order number.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const originCoords = defaultOrigin;
      const destinationCoords = destination || defaultDestination;

      setParcelData({
        description: "Working machines",
        destination_pin: destinationCoords.join(", "),
        id: orderNumber,
        origin_pin: originCoords.join(", "),
        status: "pending",
        weight_kg: 30,
      });

      // Fetch route from OSRM API
      const routeResponse = await fetch(
        `https://router.project-osrm.org/route/v1/driving/${originCoords[1]},${originCoords[0]};${destinationCoords[1]},${destinationCoords[0]}?overview=full&geometries=geojson`
      );
      const routeData = await routeResponse.json();

      if (routeData.routes?.length > 0) {
        const routeCoords = routeData.routes[0].geometry.coordinates.map(coord => [coord[1], coord[0]]);
        const distanceKm = (routeData.routes[0].distance / 1000).toFixed(2);
        const durationMin = Math.ceil(routeData.routes[0].duration / 60);

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

  // Animate the parcel movement along the route
  const animateParcelMovement = (routeCoords, totalDistanceMeters, totalDurationSeconds) => {
    let index = 0;
    const intervalMs = (totalDurationSeconds / routeCoords.length) * 1000;
    const distancePerSegment = totalDistanceMeters / routeCoords.length / 1000;

    const moveParcel = () => {
      if (index < routeCoords.length) {
        setParcelPosition(routeCoords[index]);
        setRemainingDistance(prev => (prev - distancePerSegment).toFixed(2));
        setRemainingTime(prev => Math.max(0, prev - Math.ceil(totalDurationSeconds / routeCoords.length / 60)));
        index++;
        setTimeout(moveParcel, intervalMs);
      }
    };
    moveParcel();
  };

  // Update parcel data when the destination changes
  useEffect(() => {
    if (destination) {
      fetchParcelData(destination);
    }
  }, [destination]);

  // Handle map click to update destination
  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setDestination([lat, lng]);
      },
    });
    return destination ? <Marker position={destination}><Popup>New Destination</Popup></Marker> : null;
  };

  // Handle sending updated parcel details to backend API
  const sendUpdatedDetails = async () => {
    if (!parcelData || !orderNumber) {
      setError("Please enter an order number and ensure the data is loaded.");
      return;
    }

    const updatedDetails = {
      origin_pin: parcelData.origin_pin,
      destination_pin: parcelData.destination_pin,
      weight_kg: parcelData.weight_kg,
      description: parcelData.description,
    };

    try {
      const response = await fetch(`${API_BASE_URL}/parcel/${orderNumber}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedDetails),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Updated order:", result);
      alert("Parcel updated successfully!");
    } catch (error) {
      console.error("Error updating order:", error);
      setError("Failed to update parcel.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Update Your Order</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter Order Number"
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          style={{ padding: "10px", fontSize: "16px", borderRadius: "5px", border: "1px solid #ccc", marginRight: "10px" }}
        />
        <button
          onClick={fetchParcelData}
          style={{ padding: "10px 15px", fontSize: "16px", borderRadius: "5px", border: "none", backgroundColor: "#007bff", color: "#fff", cursor: "pointer", marginRight: "10px" }}
        >
          Track Order
        </button>
      </div>

      {loading && <p>Loading order details...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {parcelData && !loading && (
        <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "10px", maxWidth: "300px", margin: "0 auto 20px 0", backgroundColor: "beige" }}>
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
        <MapContainer center={defaultOrigin} zoom={12} style={{ height: "100%", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={defaultOrigin}><Popup>Origin</Popup></Marker>
          <LocationMarker />
          {route.length > 0 && <Polyline positions={route} color="blue" />}
          {parcelPosition && (<Marker position={parcelPosition}><Popup>Parcel is here</Popup></Marker>)}
        </MapContainer>
      </div>

      <button
        onClick={sendUpdatedDetails}
        style={{ padding: "10px 15px", fontSize: "16px", borderRadius: "5px", border: "none", backgroundColor: "#28a745", color: "#fff", cursor: "pointer", marginTop: "20px" }}
      >
        Submit New Details
      </button>
    </div>
  );
};

export default UpdateOrderPage;
