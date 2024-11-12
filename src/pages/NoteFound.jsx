import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaArrowLeft } from 'react-icons/fa';

const Ghost404Page = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-gray-800 to-black text-gray-200">
      <div className="text-center mb-6">
        <h1 className="text-9xl font-bold text-gray-400 ghost-glow">404</h1>
        <p className="text-2xl font-semibold ghost-text">Page Not Found</p>
      </div>

      <div className="relative mb-6 ghost-container">
        <div className="w-36 h-36 bg-white rounded-full border-4 border-gray-300 relative mx-auto ghost-float">
          <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-gray-800 rounded-full eye"></div>
          <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-gray-800 rounded-full eye"></div>
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-gray-800 rounded-full transform rotate-45 -translate-x-1/2"></div>
        </div>

        <div className="w-20 h-3 bg-gray-500 rounded-full mx-auto mt-4 animate-pulse shadow-pulse"></div>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 hover:animate-wiggle transition"
        >
          <FaHome className="mr-1 inline-block" /> Home
        </button>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 rounded bg-gray-500 hover:bg-gray-400 hover:animate-wiggle transition"
        >
          <FaArrowLeft className="mr-1 inline-block" /> Go Back
        </button>
      </div>
    </div>
  );
};

export default Ghost404Page;
