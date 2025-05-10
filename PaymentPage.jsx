import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PaymentPage = () => {
  const { serviceName } = useParams();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentDetails, setPaymentDetails] = useState('');

  const handlePayment = () => {
    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }

    // Simulate payment success
    setTimeout(() => {
      navigate('/success');
    }, 1000);
  };

  const renderPaymentInput = () => {
    switch (paymentMethod) {
      case 'upi':
        return (
          <input
            type="text"
            placeholder="Enter UPI ID"
            value={paymentDetails}
            onChange={(e) => setPaymentDetails(e.target.value)}
            className="form-control my-2"
          />
        );
      case 'card':
        return (
          <input
            type="text"
            placeholder="Enter Card Number"
            value={paymentDetails}
            onChange={(e) => setPaymentDetails(e.target.value)}
            className="form-control my-2"
          />
        );
      case 'cod':
        return <p>No details needed. You’ll pay at delivery.</p>;
      case 'netbanking':
        return (
          <select
            value={paymentDetails}
            onChange={(e) => setPaymentDetails(e.target.value)}
            className="form-select my-2"
          >
            <option value="">Select Bank</option>
            <option value="hdfc">HDFC</option>
            <option value="sbi">SBI</option>
            <option value="icici">ICICI</option>
          </select>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>
        Payment for {serviceName.charAt(0).toUpperCase() + serviceName.slice(1)}
      </h2>
      <p>Total: $100</p>

      <h5>Select Payment Method:</h5>
      <div className="form-check">
        <input
          type="radio"
          id="upi"
          name="paymentMethod"
          value="upi"
          className="form-check-input"
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <label className="form-check-label" htmlFor="upi">UPI</label>
      </div>

      <div className="form-check">
        <input
          type="radio"
          id="card"
          name="paymentMethod"
          value="card"
          className="form-check-input"
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <label className="form-check-label" htmlFor="card">Credit/Debit Card</label>
      </div>

      <div className="form-check">
        <input
          type="radio"
          id="netbanking"
          name="paymentMethod"
          value="netbanking"
          className="form-check-input"
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <label className="form-check-label" htmlFor="netbanking">Net Banking</label>
      </div>

      <div className="form-check">
        <input
          type="radio"
          id="cod"
          name="paymentMethod"
          value="cod"
          className="form-check-input"
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <label className="form-check-label" htmlFor="cod">Cash on Delivery</label>
      </div>

      <div className="my-3">{renderPaymentInput()}</div>

      <button className="btn btn-primary" onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
};

export default PaymentPage;

