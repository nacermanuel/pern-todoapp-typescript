import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import { Register } from './pages/Register.jsx';


export default function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/register' element={<Register/>}/>
            
    </Routes>
  )
}
