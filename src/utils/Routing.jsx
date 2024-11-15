import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Forget from '../pages/Forget';
import Home from '../pages/Home';
import NoteFound from '../pages/NoteFound';
import LectureSuggestions from '../pages/Lecture-Suggestions';
import OrderManagement from '../pages/OrderManagement';
import OrderDetails from '../pages/OrderDetails';
import AgronomySuggestions from '../pages/AgronomySuggestions'
import Addnewproduct from '../pages/Addnewproduct'
import RequestForm from '../pages/RequestForm';
import AllLeadAssigned from '../pages/AllLeadAssigned';
import TopSku from '../pages/TopSku';
import TopSkillsSku from '../pages/TopSkillsSku';

const Routing = () => {
  return (
    <Routes>
      {/* Define the main routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forget" element={<Forget />} />

      {/* Main Home route with nested routes */}
      <Route path="/" element={<Home />}>
        <Route index element={<OrderManagement />} />
        <Route path="/order-board" element={<OrderManagement />} />
        <Route path="/order-board/order/:id" element={<OrderDetails />} />
        <Route path="/lecture-suggestions" element={<LectureSuggestions />} />
        <Route path="/lecture-suggestions/new-request" element={<RequestForm/>} />
        <Route path="/agronomysuggestions" element={<AgronomySuggestions />} />
        <Route path="/all-lead-assigned" element={<AllLeadAssigned/>} />
        <Route path="/addnewproduct" element={<Addnewproduct />} />
        <Route path="/topsku" element={<TopSku />} />
        <Route path="/topskillssku" element={<TopSkillsSku />} />
        <Route path="*" element={<NoteFound />} />
      </Route>
      <Route path="*" element={<NoteFound />} />
    </Routes>
  );
};

export default Routing;
