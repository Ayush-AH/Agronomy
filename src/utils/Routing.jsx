import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Forget from '../pages/Forget'
import Home from '../pages/Home'
import NoteFound from '../pages/NoteFound'

const Routing = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoteFound />} />
    </Routes>
  )
}

export default Routing
