import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <div className='w-96 rounded-xl p-4 border shadow-md bg-white'>
      <div className='flex justify-between items-baseline mb-4'>
        <p className='font-semibold text-lg'>Today's Task</p>
        <button className='font-semibold text-xs text-gray-600'>View all</button>
      </div>
      
      <div className="space-y-1">
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`flex justify-between items-center pb-3 ${index !== tasks.length - 1 ? 'border-b' : ''} border-gray-200`}
          >
            <div>
              <h3 className='font-semibold'>{task.name}</h3>
              <p className='text-xs text-gray-500'>{task.time}</p>
            </div>
            <button className={`px-2 py-1 text-xs font-medium rounded ${getStatusClasses(task.status)}`}>
              {task.statusText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const getStatusClasses = (status) => {
  switch (status) {
    case 'to-do':
      return 'bg-blue-600 text-white';
    case 'in-progress':
      return 'bg-yellow-500 text-white';
    case 'completed':
      return 'bg-green-500 text-white';
    default:
      return 'bg-gray-400 text-white';
  }
};

export default TaskList;
