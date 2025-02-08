import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import AboutPage from "./pages/About/AboutPage";
import CancelOrder from "./pages/CancelOrder/CancelOrder";
import ContactPage from "./pages/Contact/ContactPage";
import CreateOrderPage from "./pages/createorder/CreateOrderPage";
import Dashboard from "./pages/Dashboard/DashboardPage";
import DeliveryDetails from "./pages/DeliveryDetails/DeliveryDetailsPage";
import Faqs from "./pages/faqs/Faqs";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/Homepage/HomePage";
import Login from "./pages/Account/login/LoginPage";
import MyOrdersPage from "./pages/MyOrdersPage/MyOrdersPage";
import Navbar from "./components/Navbar/Navbar";
import OrderDetailsAdm from "./pages/OrderDetailsAdm/OrderDetailsAdm";
import OrderDetails from "./pages/OrderDetails/OrderDetails";
import OrderDetailsPage from "./pages/OrderDetailsPage/OrderDetailsPage";
import ProfilePage from './pages/Profilepage/ProfilePage';
import ServicePage from "./pages/Services/ServicePage";
import Settings from './pages/Settings/Settings';
import Signup from "./pages/Account/signup/SignupPage";
import TrackMyOrderPage from "./pages/TrackOrder/TrackMyOrderPage";
import UpdateOrderPage from "./pages/updateOrder/UpdateOrderPage";
import UsersPage from "./pages/AllUsers/AllUsers";

const AppContent = () => {
  const location = useLocation(); // Get current route
  const hideFooter = location.pathname === "/login" || location.pathname === "/signup";
  const hideNavbar = location.pathname ===  "/login" || location.pathname === "/signup" || location.pathname === "/";

  return (
    <div className="App">
      {!hideNavbar && <Navbar />} {/* Hide Navbar on login/signup */}      
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cancelorder" element={<CancelOrder />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/createorder" element={<CreateOrderPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/delivery-details" element={<DeliveryDetails />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myorders" element={<MyOrdersPage />} />
        <Route path="/order-details" element={<OrderDetails />} />
        <Route path="/orderdetails/:orderId" element={<OrderDetailsPage />} />
        <Route path="/parcels/:orderId" element={<OrderDetailsPage />} />
        <Route path="/parcelsadm/:orderId" element={<OrderDetailsAdm />} />
        <Route path="/profile" element={<ProfilePage />} /> 
        <Route path="/services" element={<ServicePage />} />        
        <Route path="/settings" element={<Settings />} />
        <Route path="/signup" element={<Signup />} />        
        <Route path="/trackorder" element={<TrackMyOrderPage />} />
        <Route path="/updateorder" element={<UpdateOrderPage />} />
        <Route path="/users"  element={<UsersPage />} />
        
      </Routes>
      {!hideFooter && <Footer />} {/* Hide Footer on login/signup */}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
