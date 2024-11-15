import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const MeetingSchedule = ({ meetings }) => (
  <div className='w-96 rounded-xl p-4 border shadow-md bg-white'>
    <div className='flex justify-between items-baseline mb-4'>
      <p className='font-semibold text-lg'>Today's Meetings</p>
      <button className='font-semibold text-xs text-gray-600'>View all</button>
    </div>
    <div className="grid grid-cols-2 gap-2">
      {meetings.map((meeting, index) => (
        <div
          key={index}
          className='flex flex-col justify-start items-start w-full h-20 bg-gray-100 rounded-lg px-4 border p-2'
        >
          <p className='text-sm font-[400] text-gray-700'>{meeting.time.split(' ')[1]}</p>
          <p className='text-2xl font-semibold text-gray-700'>{meeting.time.split(' ')[0]}</p>
          <p className='text-xs text-gray-500'>{meeting.title}</p>
          <p className='text-xs text-gray-500'>{meeting.description}</p>
        </div>
      ))}
      <div className="flex items-center justify-center w-full h-20 bg-gray-100 rounded-lg px-4 border p-2">
        <button className="flex flex-col items-center justify-center w-full h-full text-lg">
          <div className=''>
            <AiOutlinePlus className="mr-2 text-2xl  rounded-lg " />
          </div>
          <span className="text-xs mt-2 text-gray-500">Schedule Meeting</span>
        </button>
      </div>
    </div >
  </div >
);

export default MeetingSchedule;
