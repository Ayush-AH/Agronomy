import React from 'react'
import Table from '../components/Table'
import { Link } from 'react-router-dom'

const LectureSuggestions = () => {


  const tableHeaders = [
    { label: 'No.', key: 'id' },
    { label: 'Status', key: 'status' },
    { label: 'Department', key: 'department' },
    { label: 'Lecture Name', key: 'lectureName' },
    { label: 'Apply Date', key: 'applyDate' },
    { label: 'Approval', key: 'approval' },
    { label: 'Download', key: 'download' }
  ];

  const tableData = [
    {
      id: 1,
      status: 'Approval',
      department: 'Marketing',
      lectureName: 'Archhhanna',
      applyDate: '24 Nov 2022, 12:41 AM',
      approval: 'Approval by founder',
    },
    {
      id: 2,
      status: 'Approval',
      department: 'Marketing',
      lectureName: 'Archhhanna',
      applyDate: '24 Nov 2022, 12:41 AM',
      approval: 'Approval by founder',
    },
    {
      id: 3,
      status: 'Approval',
      department: 'Marketing',
      lectureName: 'Archhhanna',
      applyDate: '24 Nov 2022, 12:41 AM',
      approval: 'Approval by founder',
    },
    {
      id: 4,
      status: 'Approval',
      department: 'Marketing',
      lectureName: 'Archhhanna',
      applyDate: '24 Nov 2022, 12:41 AM',
      approval: 'Approval by founder',
    },
    {
      id: 5,
      status: 'Approval',
      department: 'Marketing',
      lectureName: 'Archhhanna',
      applyDate: '24 Nov 2022, 12:41 AM',
      approval: 'Approval by founder',
    },
    {
      id: 6,
      status: 'Approval',
      department: 'Marketing',
      lectureName: 'Archhhanna',
      applyDate: '24 Nov 2022, 12:41 AM',
      approval: 'Approval by founder',
    },
  ];




  return (
    <div className='w-full max-h-screen overflow-y-auto bg-white px-6 py-[25px] rounded-xl'>
      {/* header */}
      <div className='w-full'>
        <h1 className="text-2xl font-semibold text-gray-900 border-b-2 pb-5">Available Lecture</h1>
      </div>
      {/* cards */}
      <div className='w-full p-8 flex gap-40'>
        <div className='card w-36 flex flex-col items-center'>
        <div className='w-full h-36 mb-2'>
          <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1729892938035-91ccb9a0419b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="" />
        </div>
        <h2 className='text-sm whitespace-nowrap text-center font-medium leading-2'>Registration form</h2>
        <h2 className='text-sm whitespace-nowrap text-center font-medium leading-2'>(Reg- Form)</h2>
        </div>
        <div className='card w-36 flex flex-col items-center'>
        <div className='w-full h-36 mb-2'>
          <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1731461299486-10092088b7f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <h2 className='text-sm whitespace-nowrap text-center font-medium leading-2'>Certificate of Grades</h2>
        <h2 className='text-sm whitespace-nowrap text-center font-medium leading-2'>(COG)</h2>
        </div>
        <div className='card w-36 flex flex-col items-center'>
        <div className='w-full h-36 mb-2'>
          <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1731461297556-f8441c9fc303?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <h2 className='text-sm whitespace-nowrap text-center font-medium leading-2'>Certificate of Enrollment</h2>
        <h2 className='text-sm whitespace-nowrap text-center font-medium leading-2'>(COE)</h2>
        </div>
        <div className='card w-36 flex flex-col items-center'>
        <div className='w-full h-36 mb-2'>
          <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1731461299404-9a1d48e95cd3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <h2 className='text-sm whitespace-nowrap text-center font-medium leading-2'>Transcript of Records</h2>
        <h2 className='text-sm whitespace-nowrap text-center font-medium leading-2'>(TOR)</h2>
        </div>
      </div>
      {/* header2 */}
      <div className='w-full pb-6 flex items-center justify-between gap-5'>
        <Link to="/lecture-suggestions/new-request" className='px-6 text-white whitespace-nowrap rounded-md py-2 bg-[#3ABABA]'>Request New  <i class="ri-arrow-right-s-line"></i></Link>
     <hr  className='w-full border-[1px]'/>
      </div>
      {/* table */}
     <Table tableHeaders={tableHeaders} tableData={tableData}/>
    </div>
  )
}

export default LectureSuggestions