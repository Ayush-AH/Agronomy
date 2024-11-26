import React from 'react';
import PieChart from '../components/PieChart';

const chartStyle = {
  width: '400px',
  height: '410px',
  border: '1px solid #D1D5DB',
  borderRadius: '8px',
};

const salesData = [
  { id: 1, sku: "AAAA-111", quantity: 97 },
  { id: 2, sku: "AAAA-112", quantity: 48 },
  { id: 3, sku: "AAAA-113", quantity: 32 },
  { id: 4, sku: "AAAA-114", quantity: 26 },
  { id: 5, sku: "AAAA-115", quantity: 22 },
  { id: 6, sku: "AAAA-116", quantity: 19 },
  { id: 7, sku: "AAAA-117", quantity: 18 },
  { id: 8, sku: "AAAA-118", quantity: 12 },
  { id: 9, sku: "AAAA-119", quantity: 9 },
  { id: 10, sku: "AAAA-120", quantity: 4 },
];

const TopSku = () => {
  return (
    <div className="relative w-full overflow-y-auto h-screen bg-white">
      {/* Updated Background SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute z-10 left-0  w-full h-auto transform rotate-180"
        viewBox="0 0 1400 320"
      >
        <path
          fill="url(#gradient)"
          fillOpacity="1"
          d="M0,224L48,192C96,160,192,96,288,101.3C384,107,480,181,576,202.7C672,224,768,192,864,181.3C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#4b5563', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#4b5563', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>

      {/* Main Content */}
      <div className="w-full px-6 h-screen overflow-y-auto shadow-xl relative z-10">
        <div className="w-full  mt-4 h-auto gap-4">
          <div className="flex items-center gap-5">
            <h1 className="font-semibold text-gray-300 uppercase">Team</h1>
            <div className="w-3 h-3 rounded-full bg-blue-500 "></div>
            <h1 className="text-blue-600 font-[700]">Team 1</h1>
          </div>
          <p className="text-3xl ml-40 text-blue-600 ">South Region</p>
        </div>

        {/* Main Content Section */}
        <div className="flex gap-8 mt-4">
          <div className="w-full md:w-1/2p-4 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <p className="text-lg text-[#3ABABA] font-semibold">Sales Details</p>
              <select className="ml-2 border-none font-semibold outline-none rounded-md px-2 bg-transparent text-[#3ABABA]">
                <option>Month</option>
                <option>Mohit</option>
                <option>Rohit</option>
                <option>Rohan</option>
              </select>
            </div>
            <div className="overflow-x-auto h-[71vh] rounded-lg">
              <table className="w-full border overflow-y-auto shadow-md text-left table-auto">
                <thead>
                  <tr className="text-[#2e3434] sticky top-0">
                    <th className="py-3 px-4 bg-teal-200">No.</th>
                    <th className="py-3 px-4 bg-teal-200 text-center">Sku</th>
                    <th className="py-3 px-4 bg-teal-200 text-right">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {salesData
                    .sort((a, b) => a.id - b.id)
                    .map((item) => (
                      <tr key={item.id} className="border-b hover:bg-teal-50 transition duration-300">
                        <td className="py-3 px-4">{item.id}</td>
                        <td className="py-3 px-4 text-center">{item.sku}</td>
                        <td className="py-3 px-4 text-right">{item.quantity}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pie Chart Section */}
          <div className="w-full md:w-1/2 mt-12 my-auto flex flex-col justify-between">
            <h3 className="text-2xl font-semibold text-[#3ABABA] mt-8 mb-2">Top Five Products</h3>
            <div className="border w-fit p-2 bg-white rounded-lg shadow-md transition duration-300">
              <PieChart data={salesData} style={chartStyle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSku;
