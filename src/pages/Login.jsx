import axios from '../utils/Axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  document.title = "Agronomy Portal - Login";

  // State for managing input fields and error message
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        '/api/auth/login',
        { email, password }, // Payload
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      // Destructure response
      const { token, message } = response.data;

      // Save token in localStorage
      localStorage.setItem('authToken', token);

      // Display success toast
      toast.success(message || 'Login successful');

      // Redirect to dashboard or home page
      navigate('/');
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || 'Invalid credentials or an error occurred';
      setError(errorMessage);
      toast.error(errorMessage); // Display error toast
      console.error('Error during login:', err.response || err.message);
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-200 via-yellow-200 to-brown-200 opacity-75 z-0"></div>

      {/* Login Card */}
      <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg bg-white text-gray-700 p-8 rounded-lg shadow-lg z-10">
        <h1 className="text-2xl font-bold text-center mb-6">
          <span className="text-gray-700">Login with</span>{' '}
          <span className="text-blue-600">Katyayani</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div className="relative">
            <label
              htmlFor="email"
              className="block text-left font-semibold mb-1 text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-50 border py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              placeholder="Email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-left font-semibold mb-1 text-gray-600"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-50 border py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              placeholder="Password"
              required
            />
          </div>

          {/* Error Message */}
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md font-semibold transition-transform transform"
          >
            Sign In
          </button>

          {/* Redirect to Sign Up */}
          <div className="flex justify-center mt-6 text-sm text-gray-600">
            <span>Don't have an account?</span>
            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:text-blue-700 transition ml-1"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
