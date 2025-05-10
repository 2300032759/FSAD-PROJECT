// SignUpPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupForm.css';

function SignupForm() {
  const navigate = useNavigate();

  const handleSignup = async () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;

    const userData = {
      name: name,
      email: email,
      password: password,
      phone: phone
    };

    try {
      const response = await fetch("http://localhost:8081/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });

      const result = await response.text();
      alert(result);

      // Optionally navigate to home after successful signup
      navigate('/home');
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Signup failed.");
    }
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="container">
      <div className="left-section">
        <h1 className="text-3xl font-bold mb-4">SIGN UP</h1>
        <p className="mb-6">Please sign up or login to continue using our page</p>

        <div className="form-field">
          <label htmlFor="name">NAME:</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>

        <div className="form-field">
          <label htmlFor="email">EMAIL:</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>

        <div className="form-field">
          <label htmlFor="password">PASSWORD:</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>

        <div className="form-field">
          <label htmlFor="phone">PHONE NUMBER:</label>
          <input type="tel" id="phone" placeholder="Enter your phone number" />
        </div>

        <button className="signup-button" onClick={handleSignup}>Sign up</button>

        <p className="mt-4">
          Already have an account?{' '}
          <span className="login-link" onClick={handleLoginClick}>Login</span>
        </p>
      </div>

      <div className="right-section">
        <img
          src="HOME SERVICES LOGO.png"
          alt="HOME SERVICES LOGO"
          className="image"
        />
      </div>
    </div>
  );
}

export default SignupForm;
