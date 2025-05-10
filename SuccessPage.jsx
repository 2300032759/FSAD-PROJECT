import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>🎉 Payment Successful!</h2>
      <p>Thank you for using our service. We'll be in touch shortly!</p>
      <button 
        className="btn btn-success mt-3" 
        onClick={handleGoHome}
      >
       Log out
      </button>
    </div>
  );
};

export default SuccessPage;

