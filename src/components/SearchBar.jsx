import React from 'react'
import { FiMenu, FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  return (
    <div className="flex items-center border bg-gray-200 border-gray-300 rounded-lg p-3 shadow-sm w-full">
      <FiMenu className="text-gray-700 mr-2" size={20} />
      <input
        type="text"
        placeholder="Search ID"
        className="flex-grow bg-transparent focus:outline-none text-gray-800 text-sm"
      />
      <FiSearch className="text-gray-500 ml-2" size={20} />
    </div>
  )
}

export default SearchBar