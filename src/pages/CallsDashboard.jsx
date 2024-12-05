import React from 'react'

const CallsDashboard = () => {
  return (
    <div className='w-full p-5  bg-gray-100 h-full'>
      <h1 className='opacity-75 mb-2 font-[600]'>Calls Dashboard</h1>
      <div className='w-full max-h-[85vh] p-4 h-[85vh] shadow-md bg-gray-50 rounded-lg'>
        <div className="w-full h-16 flex justify-between items-center bg-gray-50  rounded-md px-4">

          <div className="flex items-center justify-center w-32 bg-green-500 text-white text-sm font-medium py-2 px-3 rounded">
            Dropdown
          </div>

          <div className="flex-1 ml-12">
            <ul className="flex justify-between items-center text-center">
              <li className="flex flex-col bg-white px-2 border border-t-0 border-gray-300 w-fit">
                <p className="text-sm text-gray-500">Total</p>
                <p className="text-xs font-semibold text-gray-800">100</p>
              </li>
              <li className="flex flex-col bg-white px-2 border border-t-0 border-gray-300 w-fit">
                <p className="text-sm text-gray-500">Active Call</p>
                <p className="text-xs font-semibold text-gray-800">24</p>
              </li>
              <li className="flex flex-col bg-white px-2 border-t-0 border border-gray-300 w-fit">
                <p className="text-sm text-gray-500">No Answer</p>
                <p className="text-xs font-semibold text-gray-800">24</p>
              </li>
              <li className="flex flex-col bg-white px-2 border-t-0 border border-gray-300 w-fit">
                <p className="text-sm text-gray-500">Left Voicemail</p>
                <p className="text-xs font-semibold text-gray-800">9,134</p>
              </li>
              <li className="flex flex-col bg-white px-2 border-t-0 border border-gray-300 w-fit">
                <p className="text-sm text-gray-500">Voicemail Full</p>
                <p className="text-xs font-semibold text-gray-800">9,134</p>
              </li>
              <li className="flex flex-col bg-white  border border-gray-300 rounded-lg w-fit">
                <p className="text-sm text-gray-500">Wrong Number</p>
                <p className="text-xs font-semibold text-gray-800">9,134</p>
              </li>
              <li className="flex flex-col bg-white shadow-md border border-gray-300 rounded-lg w-fit">
                <p className="text-sm text-gray-500">Busy Tone</p>
                <p className="text-xs font-semibold text-gray-800">9,134</p>
              </li>
              <li className="flex flex-col bg-white shadow-md border border-gray-300 rounded-lg w-fit">
                <p className="text-sm text-gray-500">Not Interested</p>
                <p className="text-xs font-semibold text-gray-800">9,134</p>
              </li>
              <li className="flex flex-col bg-white shadow-md border border-gray-300 rounded-lg w-fit">
                <p className="text-sm text-gray-500">Not Now</p>
                <p className="text-xs font-semibold text-gray-800">9,134</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallsDashboard