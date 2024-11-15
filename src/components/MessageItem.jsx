import React from 'react';

const MessageItem = ({ name, time, message, imgSrc }) => (
  <div className='flex w-full gap-5 items-center justify-between rounded-lg'>
    <img className='w-16 h-12 rounded-full object-cover object-top' src={imgSrc} alt="model" />
    <div className='w-full'>
      <div className='flex items-center justify-between'>
        <h1 className='text-sm font-[900] text-gray-700'>{name}</h1>
        <p className='text-sm text-gray-500'>{time}</p>
      </div>
      <p className='text-xs w-72 text-gray-500 text-ellipsis overflow-hidden'>{message}</p>
    </div>
  </div>
);

const MessageList = () => {
  const data = [
    {
      name: 'Alice',
      time: '8:15 AM',
      message: 'Hello, how are you doing today?',
      imgSrc: 'https://thumbs.dreamstime.com/b/portrait-little-model-girl-studio-portrait-little-model-girl-139325272.jpg',
    },
    {
      name: 'Bob',
      time: '9:30 AM',
      message: 'Just finished the project, ready for the next one!',
      imgSrc: 'https://media.istockphoto.com/id/1582812122/photo/happy-perfect-gesture-and-portrait-of-a-man-in-a-studio-with-an-agreement-sign-or-expression.jpg?s=612x612&w=0&k=20&c=5J3XelId5Q7z5buZqcwItjTSftJvjXZRPLL_h_yGJew=',
    },
    {
      name: 'Charlie',
      time: '10:00 AM',
      message: 'Can we schedule a meeting for next week?',
      imgSrc: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRwqjYpWqunCt9q-ztTOes3HwlwYegkI9uAhmYuKm7fNSvT6BB-HtH4EfRf0U877WoSjknpkxkVzl01nkA4LAMrOZhL-uh9FZ9YSphPghUyqv8x0Ja0H-wIvj3qYxl2XnnLOt8eU4iIB32/s800/Candice+Swanepoel+02.jpg',
    },
    {
      name: 'Diana',
      time: '11:45 AM',
      message: 'Looking forward to the event this evening!',
      imgSrc: 'https://st3.depositphotos.com/11668908/17813/i/450/depositphotos_178131632-stock-photo-portrait-woman-close.jpg',
    },
    // {
    //   name: 'Eve',
    //   time: '1:00 PM',
    //   message: 'Let’s catch up soon, I have some exciting news!',
    //   imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQxt0bfoq6X18NKfeXDxgvZCSyF45WkzhvqLWlAszAIZ8Upe3lUEJH2HJcPhvB68pBugU&usqp=CAU',
    // },
    // {
    //   name: 'Frank',
    //   time: '2:30 PM',
    //   message: 'I need help with debugging, can you assist me?',
    //   imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQuITG1-LIYv1ftGM1ct9S1-7PO-qSf_xodqHDf-KGOytEs8AkCEgZ2mqNiKd-um1UKc&usqp=CAU',
    // },
    {
      name: 'Grace',
      time: '3:50 PM',
      message: 'I’m working on a new design for the app, excited to share it!',
      imgSrc: 'https://img.freepik.com/premium-photo/young-man_948023-1218.jpg',
    },
  ];
  

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className='p-1'>
          <MessageItem {...item} />
          {index < data.length - 1 && <hr className='border-gray-500 mt-2' />}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
