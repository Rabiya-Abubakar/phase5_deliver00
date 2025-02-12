// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Login from "./pages/Account/login/LoginPage";
// import Signup from "./pages/Account/signup/SignupPage";
// import DashboardPage from "./pages/Dashboard/DashboardPage";
// import UpdateOrderPage from "./pages/updateOrder/UpdateOrderPage";
// import DeliveryDetailsPage from "./pages/DeliveryDetailsPage";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import CreateOrderPage from "./pages/createorder/CreateOrderPage";
// import MyOrdersPage from "./pages/MyOrdersPage/MyOrdersPage";
// import OrderDetailsPage from "./pages/orderDetailsPage/OrderDetailsPage";
// import TrackMyOrderPage from "./pages/TrackOrder/TrackMyOrderPage";

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar /> {/* Add Navbar here so it renders on all pages */}
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/dashboard" element={<DashboardPage />} />
//           <Route path="/myorders" element={<MyOrdersPage />} />
//           <Route path="/orderdetails/:orderId" element={<OrderDetailsPage />} />
//           <Route path="/createorder" element={<CreateOrderPage />} />
//           <Route path="/updateorder" element={<UpdateOrderPage />} />
//           <Route path="/trackorder" element={<TrackMyOrderPage />} />
//           <Route path="/deliverydetails" element={<DeliveryDetailsPage />} />
//           {/* <Route path="/statistics" element={<StatisticsPage />} /> */}
//           {/* <Route path="/recentactivity" element={<RecentActivityPage />} /> */}
//           {/* <Route path="/notifications" element={<NotificationsPage />} /> */}
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;


import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Homepage/HomePage";
import Login from "./pages/Account/login/LoginPage";
import Signup from "./pages/Account/signup/SignupPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import UpdateOrderPage from "./pages/updateOrder/UpdateOrderPage";
import DeliveryDetailsPage from "./pages/DeliveryDetailsPage";
import Navbar from "./components/Navbar/Navbar";
import Faqs from "./pages/FAQS/FaqPage";
import Footer from "./components/Footer/Footer";
import CreateOrderPage from "./pages/createorder/CreateOrderPage";
import CancelOrderPage from "./pages/CancelOrder/CancelOrderPage";
import MyOrdersPage from "./pages/MyOrdersPage/MyOrdersPage";
import OrderDetailsPage from "./pages/orderDetailsPage/OrderDetailsPage";
import TrackMyOrderPage from "./pages/TrackOrder/TrackMyOrderPage";
import OrdersPage from "./pages/ordersPage/OrdersPage";
import OrderDetailsAdm from "./pages/OrderDetailsAdm/OrderDetailsAdm";
import UsersPage from "./pages/AllUsers/AllUsers";
import StatisticsPage from "./pages/StatisticsPage";
import RecentActivityPage from "./pages/RecentActivityPage";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import ServicesPage from "./pages/Services/ServicesPage";
import ContactUsPage from "./pages/ContactUs/ContactUsPage";
import "leaflet/dist/leaflet.css";
import LoginNav from "./components/LoginNav/LoginNav";

const AppContent = () => {
  const location = useLocation(); // Get current route
  const hideFooter = location.pathname === "/login" || location.pathname === "/signup";
  const hideNavbar = location.pathname ===  "/" || location.pathname === "/signup" || location.pathname === "/login" || location.pathname === "/services" || location.pathname === "/aboutus"  || location.pathname === "/contactus" || location.pathname === "/faqs";

  const showLoginNav = location.pathname !== location.pathname === "/aboutus" || location.pathname === "/services" || location.pathname === "/contactus" || location.pathname === "";

  return (
    <div className="App">
      {!hideNavbar && <Navbar />} {/* Hide Navbar on login/signup */}
      {showLoginNav && <LoginNav />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/myorders" element={<MyOrdersPage />} />
        <Route path="/parcels/:orderId" element={<OrderDetailsPage />} />
        <Route path="/parcelsadm/:orderId" element={<OrderDetailsAdm />} />
        <Route path="/createorder" element={<CreateOrderPage />} />
        <Route path="/updateorder" element={<UpdateOrderPage />} />
        <Route path="/cancelorder" element={<CancelOrderPage />} />
        <Route path="/trackorder" element={<TrackMyOrderPage />} />
        <Route path="/deliverydetails" element={<DeliveryDetailsPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="/recentactivity" element={<RecentActivityPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/faqs" element={<Faqs />} />
        

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
