import React, { useState } from 'react';
import './cancel-order.css'; // Ensure the CSS file is correctly placed

const CancelOrder = () => {
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [signature, setSignature] = useState('');
  const [date, setDate] = useState('');
  const [showModal, setShowModal] = useState(false);

  // Handle form input change
  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  // Show modal
  const showModalHandler = () => {
    setShowModal(true);
  };

  // Hide modal
  const hideModalHandler = () => {
    setShowModal(false);
  };

  // Confirm cancellation
  const confirmCancelHandler = () => {
    alert('Your cancellation request is being processed.');
    // Logic for canceling the order can go here (e.g., redirecting or updating order state)
    hideModalHandler();
  };

  return (
    <div className='cancel-body'>
    <div className="cancel-container">
      <h1>Cancel Order</h1>
      <form id="cancel-form">
        <label htmlFor="customer-name">Customer Name:</label>
        <input
          type="text"
          id="customer-name"
          placeholder="Enter your full name"
          value={customerName}
          onChange={(e) => handleChange(e, setCustomerName)}
          required
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => handleChange(e, setAddress)}
          required
        />

        <label htmlFor="order-number">Order Number:</label>
        <input
          type="text"
          id="order-number"
          placeholder="Enter your order number"
          value={orderNumber}
          onChange={(e) => handleChange(e, setOrderNumber)}
          required
        />

        <label htmlFor="contact-phone">Phone Number:</label>
        <input
          type="tel"
          id="contact-phone"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => handleChange(e, setPhone)}
          required
        />

        <label htmlFor="contact-email">Email Address:</label>
        <input
          type="email"
          id="contact-email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => handleChange(e, setEmail)}
          required
        />

        <label htmlFor="reason">Reason for Cancellation:</label>
        <textarea
          id="reason"
          rows="4"
          placeholder="Provide a reason for cancellation"
          value={reason}
          onChange={(e) => handleChange(e, setReason)}
          required
        ></textarea>

        <label htmlFor="signature">Signature:</label>
        <input
          type="text"
          id="signature"
          placeholder="Type your name for signature"
          value={signature}
          onChange={(e) => handleChange(e, setSignature)}
          required
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => handleChange(e, setDate)}
          required
        />

        <div className="form-actions">
          <button
            type="button"
            className="cancel-btn"
            onClick={showModalHandler}
          >
            Cancel
          </button>
        </div>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="modal" id="cancel-modal">
          <div className="modal-content">
            <h2>Cancel Order</h2>
            <p>
              Are you sure you'd like to cancel this order?{' '}
              <strong>This action cannot be undone.</strong>
            </p>
            <div className="modal-buttons">
              <button
                className="modal-btn confirm-btn"
                onClick={confirmCancelHandler}
              >
                Yes, Cancel Order
              </button>
              <button
                className="modal-btn decline-btn"
                onClick={hideModalHandler}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default CancelOrder;
