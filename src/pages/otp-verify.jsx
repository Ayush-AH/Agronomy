import React, { useState } from "react";
import axios from "../utils/Axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const OtpVerify = () => {
  const navigation = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Retrieve the email from localStorage and parse it correctly
  const userDetails = JSON.parse(localStorage.getItem("user_details") || "{}");
  const email = userDetails.email || ""; // If email exists, use it

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1); // Allow only one digit
    setOtp(newOtp);

    // Move to the next input if a digit is entered
    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Move to the previous input if backspace is pressed
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleSubmit = async () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length < 6) {
      setError("Please enter all 6 digits.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // Send email and OTP for verification
      const response = await axios.post("/api/auth/verify-otp", {
        email: email.trim(),
        otp: enteredOtp.trim(),
      });

      setSuccess(response.data.message || "OTP Verified Successfully!");
      toast.success(response.data.message || "OTP Verified Successfully!");
      navigation("/auth");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to verify OTP.");
      toast.error(err.response?.data?.message || "Failed to verify OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    // Ensure email is available before resending OTP
    if (!email) {
      setError("Email is not available. Please try again.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // Resend OTP request
      const response = await axios.post("/api/auth/resend-otp", {
        email: email.trim(),
      });

      setSuccess(response.data.message || "OTP resent successfully!");
      toast.success(response.data.message || "OTP resent successfully!");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to resend OTP.");
      toast.error(err.response?.data?.message || "Failed to resend OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Verify OTP</h2>
        <p className="text-gray-600 text-center mb-6">
          Enter the 6-digit OTP sent to your email: <strong>{email}</strong>
        </p>
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
          className={`w-full py-2 px-4 rounded ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
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
            disabled={loading}
          >
            {loading ? "Resending..." : "Resend OTP"}
          </button>
          <span className="mx-2">|</span>
          <a href="/auth" className="text-blue-500 hover:underline">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};
