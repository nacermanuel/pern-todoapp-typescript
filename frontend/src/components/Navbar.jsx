import Avatar from '@mui/material/Avatar';
import React from 'react'

export default function Navbar() {

  return (
    <nav className='bg-zinc-600 w-[100%] h-[9vh] flex items-center rounded-md mt-0.5'>
      <div className='p-2 items-center justify-center'>
        <Avatar>N</Avatar>
      </div>      
    </nav>
  )
}
