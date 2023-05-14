import Avatar from '@mui/material/Avatar';
import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {

  const cerrarSesion = () => {
    localStorage.clear();
  }

  return (
    <nav className='bg-zinc-600 w-[100%] h-[9vh] flex justify-between items-center rounded-md mt-0.5'>
      <div className='p-2 items-center justify-center'>
        <Avatar>{`: )`}</Avatar>
      </div>
      <p className='text-xs text-gray-200 mr-5' onClick={cerrarSesion}> <Link to="/">cerrar sesion</Link></p>      
    </nav>
  )
}
