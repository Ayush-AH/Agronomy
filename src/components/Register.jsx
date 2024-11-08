import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">

      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-200 via-yellow-200 to-brown-200 opacity-75 z-0"></div>

      <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg bg-white text-gray-700 p-8 rounded-md md:rounded-lg lg:rounded-2xl shadow-md z-10">
        <h1 className="text-2xl font-bold text-center mb-6 md:text-3xl lg:text-4xl">
          <span className="text-gray-700">Register with</span> <span className="text-blue-600">Katyayani</span>
        </h1>
        <form method="post" className="space-y-4">
          <div className="relative">
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              className="w-full bg-gray-50 border border-green-400 focus:border-green-600 py-3 px-4 text-base rounded-md focus:outline-none transition-all"
            />
          </div>
          <div className="relative">
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              className="w-full bg-gray-50 border border-green-400 focus:border-green-600 py-3 px-4 text-base rounded-md focus:outline-none transition-all"
            />
          </div>
          <div className="relative">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className="w-full bg-gray-50 border border-green-400 focus:border-green-600 py-3 px-4 text-base rounded-md focus:outline-none transition-all"
            />
          </div>
          <div className="relative">
            <input
              id="confirmpassword"
              name="confirmpassword"
              type="password"
              placeholder="Confirm Password"
              className="w-full bg-gray-50 border border-green-400 focus:border-green-600 py-3 px-4 text-base rounded-md focus:outline-none transition-all"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md font-semibold transition-transform transform"
          >
            Sign Up
          </button>
          <div className="flex justify-center mt-6 text-sm text-gray-600">
            <span>Already have an account? </span>
            <Link to="/login" className="text-blue-600 font-semibold hover:text-blue-700 transition ml-1">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
