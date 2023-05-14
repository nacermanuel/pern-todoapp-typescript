import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import { Register } from './pages/Register.jsx';
import { Login } from './pages/Login.jsx';


export default function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={ <Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>   
    </Routes>
  )
}
