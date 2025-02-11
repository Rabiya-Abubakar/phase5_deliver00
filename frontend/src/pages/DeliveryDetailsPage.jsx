import { useNavigate } from "react-router-dom";

const DeliveryDetailsPage = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/myorders"); // Redirect to My Orders page
  };

  return (
    <div>
      <h1>Delivery Details</h1>
      <p>Order details go here...</p>
      <button onClick={handleRedirect}>Go to My Orders</button>
    </div>
  );
};

export default DeliveryDetailsPage;
