import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const Modal = ({ show, onClose, title, children, footer }) => {
    if (!show) return null;
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h5>{title}</h5>
                    <button className="close-button" onClick={onClose}>×</button>
                </div>
                <div className="modal-body">{children}</div>
                <div className="modal-footer">
                    {footer}
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

const LoginPage = () => {
    const [activeModal, setActiveModal] = useState(null);
    const navigate = useNavigate();

    const handleLogin = () => {
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;

        // You can now send username and password to the backend via fetch
        console.log("Username:", username);
        console.log("Password:", password);

        // For now, just navigate to home
        setActiveModal(null);
        navigate('/home');
    };

    const handleSignUp = () => {
        setActiveModal(null);
        navigate('/home');
    };

    return (
        <div className="container">
            <div className="login-form">
                <h2>Login</h2>
                <form>
                    <label>Username</label>
                    <input type="text" id="login-username" placeholder="Enter username" />

                    <label>Password</label>
                    <input type="password" id="login-password" placeholder="Enter password" />

                    <button type="button" onClick={() => setActiveModal('login')}>Login</button>
                    <button type="button" onClick={() => setActiveModal('forgot')}>Forgot Password</button>
                    <button type="button" onClick={() => setActiveModal('signup')}>Sign Up</button>

                    <div className="social-login">
                        <button onClick={() => setActiveModal('facebook')}>Login with Facebook</button>
                        <button onClick={() => setActiveModal('google')}>Login with Google</button>
                    </div>
                </form>
            </div>

            <Modal
                show={activeModal === 'login'}
                onClose={() => setActiveModal(null)}
                title="Login"
                footer={<button onClick={handleLogin}>Go to Home</button>}
            >
                <p>Login successful!</p>
            </Modal>

            <Modal
                show={activeModal === 'forgot'}
                onClose={() => setActiveModal(null)}
                title="Forgot Password"
                footer={<button>Reset Password</button>}
            >
                <label>Email</label>
                <input type="email" placeholder="Enter email" />
            </Modal>

            <Modal
                show={activeModal === 'signup'}
                onClose={() => setActiveModal(null)}
                title="Sign Up"
                footer={<button onClick={handleSignUp}>Go to Home</button>}
            >
                <label>Username</label>
                <input type="text" placeholder="Enter username" />
                <label>Email</label>
                <input type="email" placeholder="Enter email" />
                <label>Password</label>
                <input type="password" placeholder="Enter password" />
            </Modal>

            <Modal
                show={activeModal === 'facebook'}
                onClose={() => setActiveModal(null)}
                title="Login with Facebook"
                footer={<button onClick={handleLogin}>Go to Home</button>}
            >
                <p>Login successful with Facebook!</p>
            </Modal>

            <Modal
                show={activeModal === 'google'}
                onClose={() => setActiveModal(null)}
                title="Login with Google"
                footer={<button onClick={handleLogin}>Go to Home</button>}
            >
                <p>Login successful with Google!</p>
            </Modal>
        </div>
    );
};

export default LoginPage;

