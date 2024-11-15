import React from 'react'
import TaskList from '../components/TaskList';
import MeetingSchedule from '../components/MeetingSchedule';
import RecentMail from '../components/RecentMail';
import { CiBellOn } from "react-icons/ci";
import MessageList from '../components/MessageItem';
import GaugeChart from '../components/GaugePieChart';

const TapSkillsSku = () => {
  const tasks = [
    { name: "Client Meeting", time: "2 mins ago", status: "to-do", statusText: "To-Do" },
    { name: "Create Engagement", time: "15 mins ago", status: "in-progress", statusText: "In Progress" },
    { name: "Create Engagement", time: "15 mins ago", status: "completed", statusText: "Completed" },
  ];

  const meetings = [
    { time: "9:30 AM", description: "Review the Project" },
    { time: "10:00 AM", description: "Team Meeting" },
    { time: "10:00 AM", description: "Team Meeting" },
  ];

  const mails = [
    { sender: "John Doe", subject: "New Market Strategy", time: "12:03 AM" },
    { sender: "Jane Smith", subject: "Monthly Update", time: "Yesterday" },
  ];

  const data = [
    { value: 75, label: "Performance", min: 0, max: 100 },
    { value: 50, label: "Efficiency", min: 0, max: 100 },
    { value: 90, label: "Satisfaction", min: 0, max: 100 },
    { value: 30, label: "Completion Rate", min: 0, max: 100 },
  ];

  return (
    <div className="bg-gray-100 rounded-l-3xl max-h-screen overflow-y-auto h-screen px-8 py-4">
      <div className='flex items-baseline justify-between'>
        <h1 className='anta-regular font-[900]'>My Task</h1>
        <button className=' font-[300] rounded border-blue-200 px-2 bg-white text-blue-500 border flex items-center gap-1'><span>Notifications</span> <CiBellOn /></button>
      </div>
      <div className='flex mt-4 justify-between'>
        <TaskList tasks={tasks} />
        <MeetingSchedule meetings={meetings} />
        <RecentMail mails={mails} />
      </div>
      <div className='flex mt-4 gap-2 justify-between'>
        <div className='w-[63%] min-h-[47vh] px-2 rounded-lg overflow-y-auto'>
          <div className='flex justify-between anta-regular'>
            <h2 className='text-2xl'>Team Progress</h2>
            <select className='border px-4 py-1 rounded bg-white'>
              <option value="overview">Overview</option>
              <option value="tasks">Tasks</option>
              <option value="progress">Progress</option>
              <option value="reports">Reports</option>
              <option value="settings">Settings</option>
            </select>
          </div>
          <p className='opacity-80 text-sm'>Monitors your team’s work here!</p>
          <div className='w-full h-[15vh]  justify-between flex mt-2'>
            <div className='w-[32%] h-full border p-2 shadow-md bg-white rounded-lg'>
              <div className="flex justify-between items-center">
                <p className="text-gray-600 font-semibold">Total Projects</p>
                <span className="text-[10px] bg-blue-500 text-white px-2 rounded-md">High Priority</span>
              </div>
              <h1 className='text-yellow-400 font-[500] text-[27px]'>90 Projects</h1>
              <div className='flex justify-between'>
                <h3 className='text-sm font-[600]'>Team in this projects:</h3>
                <div className='flex -space-x-2'>
                  <img src="https://5.imimg.com/data5/ANDROID/Default/2021/7/UX/AW/BK/39958304/132230746-425358982178250-7374844770133219684-n-jpg-500x500.jpg" class="w-5 h-5 rounded-full border-2 border-white" alt="Team member" />
                  <img src="https://image.tensorartassets.com/cdn-cgi/image/anim=false,plain=false,w=500,q=85/model_showcase/0/3e126aa4-91cb-90d1-3290-19d766f67ab3.png" class="w-5 h-5 rounded-full border-2 border-white" alt="Team member" />
                  <img src="https://imgcdn.stablediffusionweb.com/2024/9/20/00817a13-a1cf-44f8-8133-cc3e89268d3b.jpg" class="w-5 h-5 rounded-full border-2 border-white" alt="Team member" />
                </div>
              </div>
            </div>
            <div className='w-[32%] h-full border p-2 shadow-md bg-white rounded-lg'>
              <div class="flex justify-between items-center">
                <p class="text-gray-600 font-semibold">Total Projects</p>
                <span class="text-[10px] bg-red-500 text-white px-2 rounded-md">On Progress</span>
              </div>
              <h1 className='text-yellow-400 font-[500] text-[27px]'>8 <span className='text-yellow-600'>/</span><span className='text-[20px] text-yellow-300'> 10</span> Projects</h1>
              <div className='flex justify-between'>
                <h3 className='text-sm font-[600]'>Team in this projects:</h3>
                <div className='flex -space-x-2'>
                  <img src="https://5.imimg.com/data5/ANDROID/Default/2021/7/UX/AW/BK/39958304/132230746-425358982178250-7374844770133219684-n-jpg-500x500.jpg" class="w-5 h-5 rounded-full border-2 border-white" alt="Team member" />
                  <img src="https://image.tensorartassets.com/cdn-cgi/image/anim=false,plain=false,w=500,q=85/model_showcase/0/3e126aa4-91cb-90d1-3290-19d766f67ab3.png" class="w-5 h-5 rounded-full border-2 border-white" alt="Team member" />
                  <img src="https://imgcdn.stablediffusionweb.com/2024/9/20/00817a13-a1cf-44f8-8133-cc3e89268d3b.jpg" class="w-5 h-5 rounded-full border-2 border-white" alt="Team member" />
                </div>
              </div>
            </div>
            <div className='w-[32%] h-full border p-2 shadow-md bg-white rounded-lg'>
              <div class="flex justify-between items-center">
                <p class="text-gray-600 font-semibold">Total Projects</p>
                <span class="text-[10px] bg-green-500 text-white px-2 rounded-md">Completed</span>
              </div>
              <h1 className='text-yellow-400 font-[500] text-[25px]'>8 <span className='text-yellow-600'>/</span><span className='text-[24px] text-yellow-300'> 8</span> Projects</h1>
              <div className='flex justify-between'>
                <h3 className='text-sm font-[600]'>Team in this projects:</h3>
                <div className='flex -space-x-2'>
                  <img src="https://5.imimg.com/data5/ANDROID/Default/2021/7/UX/AW/BK/39958304/132230746-425358982178250-7374844770133219684-n-jpg-500x500.jpg" class="w-5 h-5 rounded-full border-2 border-white" alt="Team member" />
                  <img src="https://image.tensorartassets.com/cdn-cgi/image/anim=false,plain=false,w=500,q=85/model_showcase/0/3e126aa4-91cb-90d1-3290-19d766f67ab3.png" class="w-5 h-5 rounded-full border-2 border-white" alt="Team member" />
                  <img src="https://imgcdn.stablediffusionweb.com/2024/9/20/00817a13-a1cf-44f8-8133-cc3e89268d3b.jpg" class="w-5 h-5 rounded-full border-2 border-white" alt="Team member" />
                </div>
              </div>
            </div>
          </div>
          <div className='w-full flex justify-between items-center min-h-[33vh] h-[32vh]  mt-4'>
            <div className='w-[67%] h-full border bg-white rounded-lg shadow-md'>
              <div className='flex justify-between items-center  px-4 py-2'>
                <h2 className='text-xl'>Overall Progress</h2>
                <select className='border px-3 rounded-full py-1 bg-white'>
                  <option value="overview">Overview</option>
                  <option value="tasks">Tasks</option>
                  <option value="progress">Progress</option>
                  <option value="reports">Reports</option>
                  <option value="settings">Settings</option>
                </select>
              </div>
              <GaugeChart />
            </div>
            <div className='w-[31%] h-full border p-2 bg-white rounded-lg shadow-md'>
              <h2 className='text-xl'>Upcoming </h2>
              <ul>
                <li>
                  Events</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='w-[37%] h-[55vh] rounded-lg p-3 overflow-y-auto border shadow-md bg-white'>
          <div className='flex sticky -top-3 bg-white justify-between items-baseline mb-4'>
            <p className='font-semibold text-lg'>Recent Mail</p>
            <button className='font-semibold text-xs text-gray-600'>View all</button>
          </div>
          <MessageList />
        </div>
      </div>
    </div >
  );
}

export default TapSkillsSku