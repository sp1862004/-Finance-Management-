// src/components/Login.jsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'; // Import Firebase auth
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      // Sign in the user
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful! Navigating to home...');
      navigate('/'); // Redirect to home page
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container login-container d-flex align-items-center justify-content-center min-vh-100">
      <div className="login-box shadow p-4 bg-white animate__animated animate__fadeIn rounded">
        <h2 className="text-center mb-4">Login</h2>
        {error && <p className="text-danger text-center">{error}</p>}
        <form onSubmit={handleSignIn}>
          <div className="form-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
          <p className="text-center">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
