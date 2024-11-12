import React from 'react'
import { FaCaretDown } from "react-icons/fa";

const Dropdown = (label, options, isOpen, setIsOpen, selectedValue, setSelectedValue, ref, bgColor, icon, py = "py-2", px = "px-4", width = "w-[18vw]") => (
  <div className={`relative ${Math.random() * 10} w-auto`} ref={ref}>
    <div
      className={`flex items-center ${py} ${px} ${bgColor} border rounded cursor-pointer ${isOpen ? "ring-1 ring-indigo-800" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="text-gray-100 flex items-center gap-2">
        {icon && React.cloneElement(icon, { size: 20, className: 'text-gray-100' })}
        {selectedValue || label}
      </span>
      <FaCaretDown className={`text-xl ml-2 text-white transition-transform ${isOpen ? "-rotate-180" : ""}`} />
    </div>
    {isOpen && (
      <ul className="absolute left-0 mt-1 w-full bg-white border border-gray-50 rounded z-10 max-h-[200px] overflow-y-auto">
        {options.map((option) => (
          <li
            key={option.value}
            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            onClick={() => { setSelectedValue(option.value); setIsOpen(false); }}
          >
            {option.value}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default Dropdown
