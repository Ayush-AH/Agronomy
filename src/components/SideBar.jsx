import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { FaCaretDown, FaCaretUp, FaRegMoneyBillAlt, FaGraduationCap, FaSeedling, FaPlus, FaPhoneAlt, FaChartLine, FaStoreAlt, FaSignOutAlt } from 'react-icons/fa';

const SideBar = () => {
  const [isAgronomyOpen, setIsAgronomyOpen] = useState(true);
  const [isFloorManagerOpen, setIsFloorManagerOpen] = useState(false);

  const toggleAgronomy = () => setIsAgronomyOpen(!isAgronomyOpen);
  const toggleFloorManager = () => setIsFloorManagerOpen(!isFloorManagerOpen);

  return (
    <div className=" flex-col hidden md:flex w-72 min-h-screen bg-gray-800 text-white p-6">
      <div className="flex items-center gap-1 mb-8">
        <span className="text-2xl font-bold text-blue-500">Ag</span>
        <span className="text-xl opacity-70 text-gray-300 cursive">Ronomy</span>
      </div>

      <div className="flex flex-col items-center mb-8">
        <div className="w-20 h-20 mb-2 rounded-full bg-gray-600 flex items-center justify-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/c0f6/06fc/0740c4ec01b32fb99ce4e37683ce112d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fvlR1N9RbFS-h16JZsOuw7EM~qopWqRqR73DasWyj9Lr-2gL3hqzskY44X1iSQBngc9d~31Z376WcZI02Nw5RyGOF9oaUYC0mtzM~-O4yoMw9RFyAR7LskUvgF9DYQ7MwZhpneTtHF0vOjy1jEs4-6DahZgLqN-~16DmHKg8a3HoJi24URU576VKMPEtK9gCBqVPObAi4kJ6LYy8ZWR1A-PsZWWNeXqnqK-u98eJ6wNcJn4cyvhci2uaBFYQ-uSuq0Yfs6Ie9V5M1XhyUCR2VDM3YCWa1qysf6grz4P0LBvHfVs0p9KrA-hA6UddEmJK1Dp5CmN8bz8gxZogTxXqzg__"
            alt="Profile"
            className="rounded-full border-2 border-blue-500"
          />
        </div>
        <span className="text-sm text-gray-300">Jennifer Ross</span>
      </div>

      <nav className="flex flex-col gap-6 flex-grow">
        <div>
          <h2
            className="flex items-center justify-between text-sm font-semibold text-gray-300 mb-2 cursor-pointer"
            onClick={toggleAgronomy}
          >
            Agronomy Dashboard
            {isAgronomyOpen ? (
              <FaCaretUp className="transition-transform text-blue-500" />
            ) : (
              <FaCaretDown className="transition-transform text-blue-500" />
            )}
          </h2>
          {isAgronomyOpen && (
            <div className="flex flex-col gap-2 pl-4">
              <Link
                to="/order-board"
                className="flex items-center text-gray-300 hover:text-white transition-colors text-sm p-2 rounded-lg hover:bg-blue-600"
              >
                <FaRegMoneyBillAlt className="mr-3 text-lg text-green-500" />
                Refund Module
              </Link>
              <Link
                to="/lecture-suggestions"
                className="flex items-center text-gray-300 hover:text-white transition-colors text-sm p-2 rounded-lg hover:bg-blue-600"
              >
                <FaGraduationCap className="mr-3 text-lg text-yellow-500" />
                Lecture Suggestions
              </Link>
              <Link
                to="/agronomysuggestions"
                className="flex items-center text-gray-300 hover:text-white transition-colors text-sm p-2 rounded-lg hover:bg-blue-600"
              >
                <FaSeedling className="mr-3 text-lg text-green-600" />
                Agronomy Suggestions
              </Link>
              <Link
                to="/addnewproduct"
                className="flex items-center text-gray-300 hover:text-white transition-colors text-sm p-2 rounded-lg hover:bg-blue-600"
              >
                <FaPlus className="mr-3 text-lg text-purple-500" />
                Add New Products
              </Link>
            </div>
          )}
        </div>

        <div>
          <h2
            className="flex items-center justify-between text-sm font-semibold text-gray-300 mb-2 cursor-pointer"
            onClick={toggleFloorManager}
          >
            FloorManager Dashboard
            {isFloorManagerOpen ? (
              <FaCaretUp className="transition-transform text-blue-500" />
            ) : (
              <FaCaretDown className="transition-transform text-blue-500" />
            )}
          </h2>
          {isFloorManagerOpen && (
            <div className="flex flex-col gap-2 pl-4">
              <Link
                to="#"
                className="flex items-center text-gray-300 hover:text-white transition-colors text-sm p-2 rounded-lg hover:bg-blue-600"
              >
                <FaStoreAlt className="mr-3 text-lg text-orange-500" />
                All Leads Assigned
              </Link>
              <Link
                to="#"
                className="flex items-center text-gray-300 hover:text-white transition-colors text-sm p-2 rounded-lg hover:bg-blue-600"
              >
                <FaPhoneAlt className="mr-3 text-lg text-red-500" />
                Calls Dashboard
              </Link>
              <Link
                to="#"
                className="flex items-center text-gray-300 hover:text-white transition-colors text-sm p-2 rounded-lg hover:bg-blue-600"
              >
                <FaChartLine className="mr-3 text-lg text-teal-500" />
                Top Selling SKUs Team Wise
              </Link>
            </div>
          )}
        </div>
      </nav>

      <div className="mt-auto">
        <Link
          to="/logout"
          className="flex items-center text-red-500 hover:text-white transition-colors text-sm p-2 rounded-lg hover:bg-blue-600"
        >
          <FaSignOutAlt className="mr-3 text-lg" />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
