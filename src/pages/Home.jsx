import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';

const Home = () => {
  document.title = "Agronomy Portal - Home";

  return (
    <div className="flex min-h-screen">
      <SideBar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
