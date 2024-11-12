import React, { useState, useRef, useEffect } from 'react';
import { FiFilter, FiCheckCircle, FiClipboard, FiCalendar } from 'react-icons/fi';
import TableColumn from './TableColumn';
import Dropdown from './Dropdown';
import SearchBar from './SearchBar';

const Header = () => {
  const columns = [
    { title: "DATE", items: ["21/11/2003", "21/11/2003", "21/11/2003"], bgColor: "bg-[#CFDAAF]", wt: "w-[18vw]" },
    { title: "ORDER ID", items: ["OK-7777777", "OK-7777777"], bgColor: "bg-[#E8E5D8]" },
    { title: "AMOUNT", items: ["$2900", "$2900"], bgColor: "bg-sky-100" },
    { title: "CATEGORY", items: ["Return", "Return"], bgColor: "bg-[#EFBC73]" },
    { title: "STATUS", items: ["Approved", "Not Approved"], bgColor: "bg-[#E6D0BE]" },
    { title: "ACTION", items: ["OPEN | >", "OPEN | >"], bgColor: "bg-[#E6D0BE]" },
  ];

  const [selectedType, setSelectedType] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedOrderID, setSelectedOrderID] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isOrderIDOpen, setIsOrderIDOpen] = useState(false);
  const [isYearOpen, setIsYearOpen] = useState(false);

  const typeRef = useRef(null);
  const statusRef = useRef(null);
  const orderIDRef = useRef(null);
  const yearRef = useRef(null);

  const typeOptions = [
    { value: 'Refund & Replacement' },
    { value: 'Lecture Suggestions' },
    { value: 'Agronomy Productions' },
  ];
  const statusOptions = [
    { value: 'Pending' },
    { value: 'In Progress' },
    { value: 'Completed' },
  ];
  const orderIDOptions = [
    { value: 'Order #1234' },
    { value: 'Order #5678' },
    { value: 'Order #91011' },
  ];
  const dateOptions = ["12/11/2010", "12/11/2011", "12/11/2012", "12/11/2013", "12/11/2014", "12/11/2015", "12/11/2016","12/11/2017"];

  const handleClickOutside = (event) => {
    if (typeRef.current && !typeRef.current.contains(event.target)) setIsTypeOpen(false);
    if (statusRef.current && !statusRef.current.contains(event.target)) setIsStatusOpen(false);
    if (orderIDRef.current && !orderIDRef.current.contains(event.target)) setIsOrderIDOpen(false);
    if (yearRef.current && !yearRef.current.contains(event.target)) setIsYearOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="px-4 mt-2 w-full">
      <div className="flex justify-between items-center">
        <div className="w-1/2">
          <h1 className="text-6xl anta-regular font-semibold text-[#E5A069]">
            Manage Your <br />
            <span className="anta-regular text-5xl font-normal">Orders</span>
          </h1>
          <p className="text-[#3C3C3C] mt-5 text-xl">
            Create or Sort Orders And  Quick Access to Orders
          </p>
        </div>
        <div className="w-full md:w-1/2 flex gap-6 justify-center md:justify-end">
          <div className="w-52 h-48 rounded-xl bg-[#8BB6A2] p-4 flex flex-col justify-between shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <div className="text-4xl font-bold anta-regular text-white">Total Orders</div>
            <div className="text-lg font-semibold text-right text-white">3000</div>
          </div>
          <div className="w-52 h-48 rounded-xl anta-regular bg-[#4D4E8E] p-4 flex flex-col justify-between shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <div className="text-4xl font-bold text-white">Returns Orders</div>
            <div className="text-lg font-semibold text-right text-white">1500</div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex gap-2 mt-6">
        <SearchBar />
        <button className="w-48 h-12 bg-gray-200 text-green-500 hover:text-gray-200 shadow-sm hover:bg-[#5bb4aa] rounded-md">Import</button>
      </div>

      {/* Filter Section */}
      <div className="flex justify-between mt-6">
        {Dropdown("Select an Option", typeOptions, isTypeOpen, setIsTypeOpen, selectedType, setSelectedType, typeRef, "bg-blue-800", <FiFilter />, "py-1.5", "px-4", "w-[18vw]")}
        <div className='flex justify-between gap-4'>
          {Dropdown("Date", dateOptions.map(year => ({ value: year })), isYearOpen, setIsYearOpen, selectedYear, setSelectedYear, yearRef, "bg-[#5D7086]", <FiCalendar />, "py-1", "px-4", "w-[11vw]")}
          {Dropdown("Status", statusOptions, isStatusOpen, setIsStatusOpen, selectedStatus, setSelectedStatus, statusRef, "bg-[#5D7086]", <FiCheckCircle />, "py-1", "px-4", "w-[12vw]")}
          {Dropdown("Order ID", orderIDOptions, isOrderIDOpen, setIsOrderIDOpen, selectedOrderID, setSelectedOrderID, orderIDRef, "bg-[#5D7086]", <FiClipboard />, "py-1", "px-4", "w-[13vw]")}
        </div>
      </div>

      {/* Table Columns */}
      <div className="w-full h-[39vh] mt-5 grid grid-cols-6 gap-2">
        {columns.map((col, index) => TableColumn({ index }, col.title, col.items, col.bgColor, col.wt))}
      </div>
    </div>
  );
};

export default Header;
