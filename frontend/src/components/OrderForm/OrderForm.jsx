




// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const OrderForm = () => {
// const navigate = useNavigate()

//   const [order, setOrder] = useState({
//     origin_pin: "",
//     destination_pin: "",
//     weight_kg: "",
//     description: "",
//     user_id: "", // We'll set this from localStorage
//   });

//   const [message, setMessage] = useState("");

//   // Set the user_id from localStorage when the component mounts
//   useEffect(() => {
//     const storedUserId = localStorage.getItem("user_id");
//     if (storedUserId) {
//       setOrder((prevOrder) => ({
//         ...prevOrder,
//         user_id: storedUserId,
//       }));
//     }
//   }, []);

//   const handleChange = (e) => {
//     setOrder({ ...order, [e.target.name]: e.target.value });
//   };

//   const [userEmail, setUserEmail] = useState('');
//   const sendEmail = async (toEmail, subject, content) => {
//     const url = "https://api.brevo.com/v3/smtp/email";
//     const payload = {
//       sender: { name: "Deliveroo parcel delivery", email: "lionardmuhati58@gmail.com" },
//       to: [{ email: toEmail }],
//       subject: subject,
//       htmlContent: content
//     };
//     const headers = {
//       accept: "application/json",
//       "api-key": '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',
//       "content-type": "application/json"
//     };

//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         headers: headers,
//         body: JSON.stringify(payload),
//       });
  
//       if (response.status === 200) {
//         console.log("Email sent:", response.data);
//         return response.data;
//       } else {
//         throw new Error('Failed to send email');
//       }
//     } catch (error) {
//       console.error("Error sending email:", error.message);
//       return null;
//     }
//   };




//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       const response = await fetch("http://127.0.0.1:5000/api/v1/parcels", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(order),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage("Order created successfully!");
//         setOrder({
//           origin_pin: "",
//           destination_pin: "",
//           weight_kg: "",
//           description: "",
//           user_id: "",
//           user_email: userEmail,
//         });

//           // Navigate to dashboard after a delay of 3 seconds
//       setTimeout(() => {
//         navigate("/dashboard");
//       }, 3000); // 3-second delay (3000 milliseconds)
//       } else {
//         setMessage(`Error: ${data.message || "Something went wrong"}`);
//       }
//     } catch (error) {
//       setMessage("Network error. Please try again.");
//     }
//   };

//   return (
//     <div className="order-form-container">
//       <h2>Create Order</h2>
//       {message && <p className="message">{message}</p>}
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Origin PIN:</label>
//           <input
//             type="text"
//             name="origin_pin"
//             value={order.origin_pin}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Destination PIN:</label>
//           <input
//             type="text"
//             name="destination_pin"
//             value={order.destination_pin}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Weight (kg):</label>
//           <input
//             type="number"
//             name="weight_kg"
//             value={order.weight_kg}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Description:</label>
//           <input
//             type="text"
//             name="description"
//             value={order.description}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>User ID:</label>
//           <input
//             type="text"
//             name="user_id"
//             value={order.user_id}
//             onChange={handleChange}
//             readOnly // Since user_id is coming from localStorage, it shouldn't be editable
//           />
//         </div>

//         <div className="form-group">
//           <label>User Email:</label>
//           <input
//             type="email"
//             name="user_email"
//             value={userEmail}
//             onChange={(e) => setUserEmail(e.target.value)}
//             required
//           />
//         </div>

//         <button type="submit">Create Order</button>
//       </form>
//     </div>
//   );
// };

// export default OrderForm;



import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from "@react-google-maps/api";

const OrderForm = () => {
  const navigate = useNavigate();
  const [showDestinationMap, setShowDestinationMap] = useState(false);
  const [destinationLocation, setDestinationLocation] = useState({ lat: -1.286389, lng: 36.817223 });
  const searchBoxRef = useRef(null);

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

  useEffect(() => {
    const storedUserId = localStorage.getItem("user_id");
    if (storedUserId) {
      setOrder((prevOrder) => ({
        ...prevOrder,
        user_id: storedUserId,
      }));
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const roundedLat = latitude.toFixed(1);
        const roundedLng = longitude.toFixed(1);

        setOrder((prevOrder) => ({
          ...prevOrder,
          origin_pin: `${roundedLat},${roundedLng}`
        }));
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const sendEmail = useCallback(async (toEmail, subject, content) => {
    const url = "https://api.brevo.com/v3/smtp/email";
    const payload = {
      sender: { name: "Deliveroo Parcel Delivery", email: "lionardmuhati58@gmail.com" },
      to: [{ email: toEmail }],
      subject,
      htmlContent: content,
    };
    const headers = {
      accept: "application/json",
      "api-key": process.env.REACT_APP_BREVO_API_KEY,
      "content-type": "application/json",
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to send email");

      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error.message);
    }
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    if (!order.origin_pin || !order.destination_pin || !order.weight_kg || !order.description || !userEmail) {
      setMessage("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:5000/api/v1/parcels", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });

      if (!response.ok) throw new Error("Failed to create order");

      const data = await response.json();
      setMessage("Order created successfully!");

      await sendEmail(
        userEmail,
        "Parcel Order Created",
        `Your parcel order has been created successfully. Here are the details:<br> - Pickup Location: ${order.origin_pin}<br> - Destination: ${order.destination_pin}<br> - Weight: ${order.weight_kg} kg<br> - Description: ${order.description}`
      );

      setOrder({
        origin_pin: "",
        destination_pin: "",
        weight_kg: "",
        description: "",
        user_id: order.user_id,
      });

      setTimeout(() => navigate("/dashboard"), 3000);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [order, navigate, sendEmail, userEmail]);

  const handleDestinationMapClick = (e) => {
    const { latLng } = e;
    const lat = latLng.lat();
    const lng = latLng.lng();
    const roundedLat = lat.toFixed(1);
    const roundedLng = lng.toFixed(1);

    setOrder((prevOrder) => ({
      ...prevOrder,
      destination_pin: `${roundedLat},${roundedLng}`
    }));

    setDestinationLocation({ lat: parseFloat(roundedLat), lng: parseFloat(roundedLng) });
    setShowDestinationMap(false);
  };

  const handlePlacesChanged = () => {
    if (searchBoxRef.current) {
      const places = searchBoxRef.current.getPlaces();
      if (places && places.length > 0) {
        const place = places[0];
        const location = place.geometry.location;
        const lat = location.lat();
        const lng = location.lng();
        const roundedLat = lat.toFixed(1);
        const roundedLng = lng.toFixed(1);

        setOrder((prevOrder) => ({
          ...prevOrder,
          destination_pin: `${roundedLat},${roundedLng}`
        }));

        setDestinationLocation({ lat: parseFloat(roundedLat), lng: parseFloat(roundedLng) });
      }
    }
  };

  const mapContainerStyle = useMemo(() => ({
    width: "100%",
    height: "400px"
  }), []);

  return (
    <div className="order-form-container">
      <h2>Create Order</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Origin PIN:</label>
          <input type="text" name="origin_pin" value={order.origin_pin} readOnly required />
        </div>

        <div className="form-group">
          <label>Destination PIN:</label>
          <input
            type="text"
            name="destination_pin"
            value={order.destination_pin}
            onClick={() => setShowDestinationMap(true)}
            readOnly
            required
          />
          {showDestinationMap && (
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} libraries={["places"]}>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={destinationLocation}
                zoom={12}
                onClick={handleDestinationMapClick}
              >
                <StandaloneSearchBox onLoad={(ref) => (searchBoxRef.current = ref)} onPlacesChanged={handlePlacesChanged}>
                  <input
                    type="text"
                    placeholder="Search for a place"
                    className="search-box"
                    style={{
                      boxSizing: "border-box",
                      border: "1px solid transparent",
                      width: "240px",
                      height: "32px",
                      padding: "0 12px",
                      borderRadius: "3px",
                      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
                      fontSize: "14px",
                      outline: "none",
                      textOverflow: "ellipses",
                      position: "absolute",
                      left: "50%",
                      marginLeft: "-120px"
                    }}
                  />
                </StandaloneSearchBox>
                <Marker position={destinationLocation} />
              </GoogleMap>
            </LoadScript>
          )}
        </div>

        <div className="form-group">
          <label>Weight (kg):</label>
          <input type="number" name="weight_kg" value={order.weight_kg} onChange={handleChange} min="0" required />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <input type="text" name="description" value={order.description} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>User ID:</label>
          <input type="text" name="user_id" value={order.user_id} readOnly />
        </div>

        <div className="form-group">
          <label>User Email:</label>
          <input type="email" name="user_email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required />
        </div>

        <button type="submit" disabled={isLoading}>{isLoading ? "Processing..." : "Create Order"}</button>
      </form>
    </div>
  );
};

export default OrderForm;