import React, { useState, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';
import './ProfilePage.css';

const ProfilePage = () => {
  // Retrieve stored values from localStorage or set defaults
  const storedUserId = localStorage.getItem('user_id') || 'Not available';
  const storedUsername = localStorage.getItem('username') || '';
  const storedEmail = localStorage.getItem('email') || '';
  const storedPhone = localStorage.getItem('phone') || '';
  const storedPhoto = localStorage.getItem('photo') || 'https://via.placeholder.com/150';

  const [username, setUsername] = useState(storedUsername);
  const [email, setEmail] = useState(storedEmail);
  const [phone, setPhone] = useState(storedPhone);
  const [photo, setPhoto] = useState(storedPhoto);
  const [isEditing, setIsEditing] = useState(!storedUsername || !storedEmail || !storedPhone);
  const [message, setMessage] = useState('');

  // Save all profile details in localStorage when any of them change
  useEffect(() => {
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('photo', photo);
  }, [username, email, phone, photo]);

  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePhoneChange = (event) => setPhone(event.target.value);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
        localStorage.setItem('photo', reader.result); // Store updated photo in localStorage
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = () => {
    if (!username.trim() || !email.trim() || !phone.trim()) {
      setMessage('Username, Email, and Phone Number cannot be empty.');
      return;
    }
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    setIsEditing(false);
    setMessage('Profile updated successfully!');
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title2">{username ? `${username}'s Profile` : 'User Profile'}</h2>

      {/* Profile Photo Section */}
      <div className="profile-photo">
        <img src={photo} alt="Profile" />
        <input type="file" accept="image/*" onChange={handlePhotoChange} />
      </div>

      <div className="profile-info">
        <p><strong>User ID:</strong> {storedUserId}</p>

        {/* Username Section */}
        <div className="input-container">
          <label className="label">Username:</label>
          {isEditing ? (
            <input type="text" value={username} onChange={handleUsernameChange} />
          ) : (
            <span className="display-text">
              {username} <FaEdit className="edit-icon" onClick={() => setIsEditing(true)} />
            </span>
          )}
        </div>

        {/* Email Section */}
        <div className="input-container">
          <label className="label">Email:</label>
          {isEditing ? (
            <input type="text" value={email} onChange={handleEmailChange} />
          ) : (
            <span className="display-text">
              {email} <FaEdit className="edit-icon" onClick={() => setIsEditing(true)} />
            </span>
          )}
        </div>

        {/* Phone Number Section */}
        <div className="input-container">
          <label className="label">Phone Number:</label>
          {isEditing ? (
            <input type="text" value={phone} onChange={handlePhoneChange} />
          ) : (
            <span className="display-text">
              {phone} <FaEdit className="edit-icon" onClick={() => setIsEditing(true)} />
            </span>
          )}
        </div>

        {/* Save Button */}
        {isEditing && <button onClick={handleSaveProfile}>Save Profile</button>}

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default ProfilePage;
