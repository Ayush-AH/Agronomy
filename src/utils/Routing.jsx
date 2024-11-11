import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'
import Forget from '../components/Forget'
import Home from '../components/Home'

const Routing = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/forget" element={<Forget/>} />
        <Route path='/' element={<Home/>}></Route>
    </Routes>
  )
}

export default Routing