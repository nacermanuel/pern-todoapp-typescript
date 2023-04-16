import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './assets/pages/Home/Home.jsx'
import './App.css' ;
import Pruebaredux from './assets/components/pruebaRedux/pruebaRedux.jsx';
import Dashboard from './assets/pages/Dashboard/Dashboard.jsx';

export default function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/redux' element={<Pruebaredux/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  )
}
