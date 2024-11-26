import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaDownload, FaCheckCircle, FaExclamationCircle } from "react-icons/fa"; // Example icons

const OrderDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 py-[25px] bg-white max-h-screen overflow-auto flex flex-col items-center">
      {/* Header Section */}
      <div className="flex bg-gray-100 items-center justify-between w-full p-4 rounded-lg shadow-md mb-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="text-xl text-[#1F9F90] hover:text-[#56e5d4] transition duration-300"
          >
            &#9664;
          </button>
          <div className="w-[2px] h-10 bg-[#1F9F90]" />
          <div className="text-gray-700">
            <div className="flex gap-5 items-center text-sm">
              <p>09-10-2022 09:22 PM</p>
              <p>20-10-2022 10:42 PM</p>
            </div>
            <h3 className="uppercase font-bold text-2xl">Order Id</h3>
          </div>
        </div>
        {/* Download Button with Icon */}
        <button className="flex items-center px-6 py-2 bg-[#1F9F90] text-white rounded-lg shadow hover:bg-[#1f9f90dc] transition duration-300">
          <FaDownload className="mr-2" /> Download Invoice
        </button>
      </div>

      {/* Order Information */}
      <div className="w-full flex gap-8 mt-4">
        {/* Left Section */}
        <div className="w-3/4 grid grid-cols-2 gap-6">
          {/* Product Information */}
          <div className="p-6 bg-[#ddc5b0] min-h-fit rounded-2xl shadow-md text-gray-800 font-sans">
            <div className="text-xl font-normal">UTR ID - 7647645627878264578</div>
            <div className="w-full h-px bg-gray-800 my-2" />
            <div className="flex mt-4 items-center justify-between">
              <div>
                <h1 className="text-3xl font-semibold">Blazer</h1>
                <h3 className="text-2xl font-normal text-gray-700 mb-4">NS-3251653526</h3>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold">01</div>
                <div className="text-xs text-gray-600">Quantity</div>
              </div>
            </div>
            <hr className="my-2 w-full border-t opacity-35 border-[#232221b5]" />
            <div className="flex justify-between items-center">
              <div className="text-md font-medium text-gray-600">Price</div>
              <div className="text-xl opacity-90 font-medium">$1200</div>
            </div>
          </div>

          {/* Reason */}
          <div className="p-6 bg-[#CFDAAF] min-h-[150px] rounded-2xl shadow-md text-gray-800 font-sans">
            <div className="text-2xl font-medium">Reason</div>
            <div className="w-full h-px bg-gray-800 my-2" />
            <p className="text-lg text-gray-700">Product is Broken</p>
          </div>

          {/* Additional Info */}
          <div className="bg-[#DFEAE0] p-4 min-h-[200px] rounded-md shadow-md">
            {[["Advise", "Use Plastic Bottles"], ["UTR", "1211111111111111"], ["Refund", "1211111111111111"], ["Sales Loss", "1000"], ["Cost Implication", "12"], ["Department Responsible", ["Dispatch", "Let Hello"]], ["Comment", "Record A Video Before Dispatch"], ["Root Cause Analysis", "Heavy Packaging"]].map(([label, value]) => (
              <div key={label} className="flex justify-between items-center mb-1">
                <p className="text-[#6b8128] font-medium">{label}:</p>
                {Array.isArray(value) ? (
                  <select className="ml-2 border border-gray-300 bg-gray-500 text-white rounded-md px-2">
                    {value.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <p className="text-gray-700 text-right">{value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Approval Section */}
          <div className="bg-[#E8E5D8] p-4 min-h-[200px] rounded-md shadow-md">
            <p className="text-gray-700 mb-4 flex justify-between">
              <strong className="text-[#6b8128]">Sales Id:</strong>
              <span className="text-right">2144</span>
            </p>
            <p className="text-gray-700 mb-4 flex justify-between">
              <strong className="text-[#6b8128]">Email Id:</strong>
              <span className="text-right">Hahhh@Mail.In</span>
            </p>
            <div>
              {["Approval 1", "Approval 2", "Approval 3"].map((approval, index) => (
                <div key={index} className="flex justify-between mb-4">
                  <p className=" text-[#6b8128] flex-1">{approval}:</p>
                  <select className="ml-2 border border-gray-300 rounded-md px-2 bg-gray-500 text-white">
                    <option>Mohit</option>
                    <option>Rohit</option>
                    <option>Rohan</option>
                  </select>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section: Delivery Media */}
        <div className="w-1/4">
          <div className="p-4 border min-h-[300px] rounded-md shadow-lg">
            <p className="font-semibold mb-1 text-gray-800">Delivery Images</p>
            <div className="w-full h-44 object-contain bg-gray-300 rounded-md overflow-hidden">
              <img src="https://www.foodandwine.com/thmb/pwFie7NRkq4SXMDJU6QKnUKlaoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg" alt="Product Image" />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="w-full h-20 object-contain bg-gray-300 rounded-md overflow-hidden">
                <img src="https://www.recipetineats.com/uploads/2018/04/Veggie-Burgers_9a.jpg" alt="Image" className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-20 object-contain bg-gray-300 rounded-md overflow-hidden">
                <img src="https://leanandgreenbusiness.com/wp-content/uploads/2019/04/images1889-5ca5983e24411-1024x683.jpg" alt="Image" className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-20 bg-gray-300 rounded-md overflow-hidden">
                <img src="https://media.post.rvohealth.io/wp-content/uploads/2020/08/reasons-to-eat-real-food-1200x628-facebook-1200x628.jpg" alt="Image" className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-20 object-contain bg-gray-300 rounded-md overflow-hidden">
                <img src="https://www.eatingwell.com/thmb/aKA6WL4j01orJ6F7v9bF4PH6B7Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/air-fryer-cheeseburgers-9e0cf0071bcb4b8d9bc806cabfb61347.jpg" alt="Image" className="w-full h-full object-cover" />
              </div>
            </div>

            <p className="font-semibold text-gray-800 mt-4">Delivery Video</p>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="w-full h-20 bg-gray-300 rounded-md overflow-hidden">
                <video
                  src="https://www.w3schools.com/html/movie.mp4"
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-20 bg-gray-300 rounded-md overflow-hidden">
                <video
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
