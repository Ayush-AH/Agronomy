import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const OtpVerify = () => {
  const navigation = useNavigate();
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1); // Restrict to single character
    setOtp(newOtp);

    // Automatically focus the next input field
    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleSubmit = async () => {
    const enteredOtp = otp.join(""); // Combine the OTP digits into a single string

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    if (enteredOtp.length < 6) {
      setError("Please enter all 6 digits.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("http://localhost:3001/api/auth/verify-otp", {
        email: email.trim(),
        otp: enteredOtp.trim(),
      });
      setSuccess(response.data.message || "OTP Verified Successfully!");
      toast.success(response.data.message || "OTP Verified Successfully!")
      navigation("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to verify OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = () => {
    alert("OTP Resent!"); // Placeholder for resend OTP functionality
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Verify OTP</h2>
        <p className="text-gray-600 text-center mb-6">
          Enter your registered email and the 6-digit OTP sent to it.
        </p>
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex justify-between mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className={`w-full py-2 px-4 rounded ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
            } text-white transition`}
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {success && <p className="text-green-500 text-center mt-4">{success}</p>}
        <div className="text-center mt-4">
          <button
            onClick={handleResendOtp}
            className="text-blue-500 hover:underline"
          >
            Resend OTP
          </button>
          <span className="mx-2">|</span>
          <a href="/login" className="text-blue-500 hover:underline">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};
