import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from '../utils/Axios';

const AuthForm = () => {
  const navigation = useNavigate();
  const [isVerified, setIsVerified] = useState(true);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    termsAccepted: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isLoginForm ? '/api/auth/login' : '/api/auth/register';

    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // Assuming your API sends a successful status code and relevant data in `response.data`
      if (response.status === 200) {
        console.log('Success:', response.data);
        toast.success(isLoginForm ? 'Login Successful!' : 'Registration Successful!');
        navigation('/');
      } else if (response.status === 400) {
        toast.error("Hello " + response.data.message || 'Invalid credentials. Please try again.');
        setIsVerified(false);
      } else if (response.status === 201) {
        const filteredData = {
          username: formData.username,
          email: formData.email,
        };
        localStorage.setItem('user_details', JSON.stringify(filteredData));
        toast.success(response.data.message || 'Registration Successful!');
        navigation('/otp-verify');
      } else {
        console.error('Unexpected response:', response);
        toast.error("Backend error: " + (response.data.message || 'An error occurred. Please try again.'));
      }
    } catch (error) {
      if(error.response.status === 400) {
        navigation('/otp-verify');
        toast.error(error.response.data.message || 'An error occurred. Please try again.');
      }
      else if (error.response) {
        console.error('Server Error:', error.response.data);
        toast.error(error.response.data.message || 'An error occurred. Please try again.');
      } else if (error.request) {
        console.error('Network Error:', error.request);
        toast.error('Network error. Please check your connection.');
      } else {
        console.error('Error:', error.message);
        toast.error('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-200">
      <div className="flex w-full h-[80vh] max-w-5xl bg-[#029345] shadow-lg rounded-xl overflow-hidden">
        {/* Left Side - Image Section */}
        <div className="w-1/2 relative">
          <div className="absolute top-6 left-6">
            <h1 className="text-4xl anta-regular font-bold text-yellow-300">Agronmoy</h1>
          </div>
          <div className="flex items-center justify-center h-full p-12">
            <img
              src="https://www.katyayaniorganics.com/wp-content/uploads/slider5/KatyayaniOrganicsbanner11.jpeg"
              alt="Agronmoy Agriculture Illustration"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="absolute bottom-6 left-6 text-yellow-300">
            <p className="text-sm">Agriculture Innovation Platform</p>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="w-1/2 relative border-l-4 border-yellow-300 shadow-md bg-white rounded-tl-3xl p-12">
          {/* Toggle Switch */}
          <div className="flex mb-8 bg-gray-100 rounded-full overflow-hidden">
            <button
              onClick={() => setIsLoginForm(true)}
              className={`w-1/2 py-3 transition-colors duration-300 ${isLoginForm ? 'bg-green-500 text-white' : 'text-gray-600 hover:bg-gray-200'
                }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLoginForm(false)}
              className={`w-1/2 py-3 transition-colors duration-300 ${!isLoginForm ? 'bg-green-500 text-white' : 'text-gray-600 hover:bg-gray-200'
                }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Conditional Signup Fields */}
            {!isLoginForm && (
              <input
                type="text"
                name="username"
                placeholder="Full Name"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            )}

            {/* Email Input */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />

            {/* Password Input */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />

            {/* Checkbox for Signup */}
            {!isLoginForm && (
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleInputChange}
                  required
                  className="mr-3 text-green-500 focus:ring-green-500"
                  id="terms"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I accept all terms & conditions
                </label>
              </div>
            )}

            {/* Forgot Password Link for Login */}
            {isLoginForm && (
              <a
                href={isVerified ? '/forgot-password' : '/verify-email'}
                className="text-sm text-green-600 hover:underline block text-right"
              >
                {isVerified ? 'Forgot Password?' : 'Verify Email'}
              </a>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-300 mt-4"
            >
              {isLoginForm ? 'Login' : 'Sign Up'}
            </button>

            {/* Social Login Options */}
            {isLoginForm && (
              <div className="text-center mt-6">
                <p className="text-sm text-gray-600 mb-4">Or login with</p>
                <div className="flex justify-center space-x-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Facebook
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                    Google
                  </button>
                </div>
              </div>
            )}
          </form>

          {/* Half-Circle at Bottom */}
          <div className="absolute w-full border-t-4 border-yellow-500 -bottom-8 left-0 right-0 mx-auto h-32 bg-green-600 rounded-t-full shadow-lg flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold text-center text-white mb-1">
              Welcome to Agronomy
            </h3>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-300 text-xs">Powered By</span>
              <span className="text-xs py-1 rounded-md font-bold">Katyayani Organics</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AuthForm;
