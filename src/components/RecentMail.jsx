import React from 'react'
import { TiPlus } from "react-icons/ti";
import { PiArrowBendUpLeftFill } from "react-icons/pi";

const RecentMail = ({ mails }) => (
  <div className='w-96 rounded-xl p-4 border shadow-md bg-white'>
    <div className='flex justify-between items-baseline mb-4'>
      <p className='font-semibold text-lg'>Reminders</p>
      <button className='font-semibold text-lg flex items-center text-gray-600'><TiPlus className='mr-1' /> Add</button>
    </div>
    <div className=''>
      <div className='mt-2 mb-2 flex justify-between'>
        <div>
          <h1 className='text-lg'>9:30 <span className='font-[400]'>AM</span></h1>
          <p className='text-xs'>Pending My Approval</p>
        </div>
        <div className='flex text-blue-600 items-center'>
          <PiArrowBendUpLeftFill  />
          <p className='px-2 font-[300]'>callback</p>
        </div>
      </div>
      <hr className='border-gray-500' />
    </div>
  </div >
);


export default RecentMail