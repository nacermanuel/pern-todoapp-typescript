import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './assets/pages/Home/Home.jsx'
import './App.css' ;

export default function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={ <Home/>}/>
        
    </Routes>
  )
}
