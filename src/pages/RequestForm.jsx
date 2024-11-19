import React from 'react'
import { useNavigate } from 'react-router-dom'

const RequestForm = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full max-h-screen overflow-y-auto bg-white px-6 py-[25px] rounded-xl'>
      {/* header */}
      <div className="flex bg-gray-100 items-center justify-between w-full rounded p-3 mb-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="text-xl text-[#1F9F90] hover:text-[#56e5d4] transition duration-300"
          >
            &#9664;
          </button>
          <div className="w-[2px] h-10 bg-[#1F9F90]" />
          <h3 className="uppercase font-bold text-2xl">Order Id</h3>
        </div>
      </div>
      <div className='w-full flex justify-between gap-14'>
        <div className='w-[68%] flex flex-col items-end'>
          <div className="w-full  shadow-md rounded-md overflow-hidden">
            <div className='w-full text-white bg-[#3ABABA] py-3 text-center'>
              <h2 className='text-lg'>Lexture Request Form</h2>
            </div>
            <form>
              <div className='w-full p-3 pt-4'>
                <div className='w-full flex justify-between items-end'>
                  <h1 className='text-lg uppercase font-regular text-[#004394]'>information</h1>
                  <h4 className='text-sm'>Date: 01/02/2024</h4>
                </div>
                <div className='w-full flex items-center justify-between gap-10 p-4'>
                  <div className='flex flex-col w-1/2'>
                    <label htmlFor="name" className='text-sm'>Name*</label>
                    <input type="text" className='w-full p-2 outline-none bg-black/5' />
                  </div> <div className='flex flex-col w-1/2'>
                    <label htmlFor="name" className='text-sm'>Name*</label>
                    <input type="text" className='w-full p-2 outline-none bg-black/5' />
                  </div>
                </div>
                <div className='w-full flex items-center justify-between gap-10 p-4'>
                  <div className='flex flex-col w-1/2'>
                    <label htmlFor="name" className='text-sm'>Name*</label>
                    <input type="text" className='w-full p-2 outline-none bg-black/5' />
                  </div> <div className='flex flex-col w-1/2'>
                    <label htmlFor="name" className='text-sm'>Name*</label>
                    <input type="text" className='w-full p-2 outline-none bg-black/5' />
                  </div>
                </div>
                <div className='w-full flex justify-between items-end'>
                  <h1 className='text-lg uppercase font-regular text-[#004394]'>Lecture</h1>
                </div>
                <div className='w-full flex items-center justify-between gap-10 p-4'>
                  <div className='flex flex-col w-1/2'>
                    <label htmlFor="name" className='text-sm'>Name*</label>
                    <input type="text" className='w-full p-2 outline-none bg-black/5' />
                  </div> <div className='flex flex-col w-1/2'>
                    <label htmlFor="name" className='text-sm'>Name*</label>
                    <input type="text" className='w-full p-2 outline-none bg-black/5' />
                  </div>
                </div>
                <div className='w-full flex items-center justify-between gap-10 p-4'>
                  <div className='flex flex-col w-full'>
                    <label htmlFor="name" className='text-sm'>Name*</label>
                    <input type="text" className='w-full p-2 outline-none bg-black/5' />
                    <textarea className='w-full resize-none h-220 p-2 outline-none bg-black/5'></textarea>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <button onClick={() => navigate(-1)} className='px-10 mt-3 text-white whitespace-nowrap rounded-md py-2 bg-[#3ABABA]'>Submit</button>
        </div>

        <div className="w-[35%] p-3  rounded-md shadow-md">
          <div className='w-full '>
            <h4 className='uppercase py-2 px-3 border-b font-semibold'>available lecture</h4>
          </div>
          <div className='w-full flex flex-wrap justify-center pt-3'>
            <div className='card w-24 flex flex-col items-center mx-5 my-2'>
              <div className='w-full h-24 mb-2'>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1729892938035-91ccb9a0419b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="" />
              </div>
              <h2 className='text-sm whitespace-nowrap text-center font-medium leading-2'>Registration form</h2>
              <h2 className='text-sm whitespace-nowrap text-center font-medium leading-2'>(Reg- Form)</h2>
            </div>
            <div className='card w-24 flex flex-col items-center mx-5 my-2'>
              <div className='w-full h-24 mb-2'>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1729892938035-91ccb9a0419b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="" />
              </div>
              <h2 className='text-sm whitespace-nowrap text-center font-medium leading-2'>Registration form</h2>
              <h2 className='text-sm whitespace-nowrap text-center font-medium leading-2'>(Reg- Form)</h2>
            </div>
            <div className='card w-24 flex flex-col items-center mx-5 my-2'>
              <div className='w-full h-24 mb-2'>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1729892938035-91ccb9a0419b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="" />
              </div>
              <h2 className='text-sm whitespace-nowrap text-center font-medium leading-2'>Registration form</h2>
              <h2 className='text-sm whitespace-nowrap text-center font-medium leading-2'>(Reg- Form)</h2>
            </div>
            <div className='card w-24 flex flex-col items-center mx-5 my-2'>
              <div className='w-full h-24 mb-2'>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1729892938035-91ccb9a0419b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="" />
              </div>
              <h2 className='text-sm whitespace-nowrap text-center font-medium leading-2'>Registration form</h2>
              <h2 className='text-sm whitespace-nowrap text-center font-medium leading-2'>(Reg- Form)</h2>
            </div>
            <div className='card w-24 flex flex-col items-center mx-5 my-2'>
              <div className='w-full h-24 mb-2'>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1729892938035-91ccb9a0419b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="" />
              </div>
              <h2 className='text-sm whitespace-nowrap text-center font-medium leading-2'>Registration form</h2>
              <h2 className='text-sm whitespace-nowrap text-center font-medium leading-2'>(Reg- Form)</h2>
            </div>
            <div className='card w-24 flex flex-col items-center mx-5 my-2'>
              <div className='w-full h-24 mb-2'>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1729892938035-91ccb9a0419b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="" />
              </div>
              <h2 className='text-sm whitespace-nowrap text-center font-medium leading-2'>Registration form</h2>
              <h2 className='text-sm whitespace-nowrap text-center font-medium leading-2'>(Reg- Form)</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestForm