import React, { useState } from "react";
import "./profilepage.css"; // Importing the styles

const ProfilePage = () => {
  // Sample user data (You can fetch this from an API or state management)
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+123 456 7890",
    address: "123 Main Street, City, Country",
    profileImage: "https://via.placeholder.com/150", // Placeholder Image
  });

  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);

  // Handle input change
  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(updatedUser);
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <div className="profile-card">
        <img src={user.profileImage} alt="Profile" className="profile-image" />
        {!isEditing ? (
          <div className="profile-details">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Address: {user.address}</p>
            <button onClick={() => setIsEditing(true)} className="edit-btn">Edit Profile</button>
          </div>
        ) : (
          <form className="edit-form" onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={updatedUser.name} onChange={handleChange} />
            
            <label>Email:</label>
            <input type="email" name="email" value={updatedUser.email} onChange={handleChange} />
            
            <label>Phone:</label>
            <input type="text" name="phone" value={updatedUser.phone} onChange={handleChange} />
            
            <label>Address:</label>
            <input type="text" name="address" value={updatedUser.address} onChange={handleChange} />
            
            <button type="submit" className="save-btn">Save Changes</button>
            <button type="button" onClick={() => setIsEditing(false)} className="cancel-btn">Cancel</button>
          </form>
        )}
      </div>
      <div className="profile-links">
        <a href="/myorders">My Orders</a>
        <a href="/settings">Account Settings</a>
        <a href="/">Logout</a>
      </div>
    </div>
  );
};

export default ProfilePage;
