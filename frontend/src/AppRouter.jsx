import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './assets/pages/Home/Home.jsx'
import './App.css' ;
import Pruebaredux from './assets/components/pruebaRedux/pruebaRedux.jsx';

export default function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/redux' element={<Pruebaredux/>}/>
    </Routes>
  )
}
