import { Button } from '@mui/material'
import React from 'react'


export default function TaskItem(props) {
  return (
    <div className='bg-fuchsia-400 h-[10vh] w-[97%] flex items-center justify-around '>
        <p>{props.title}</p>
        <Button variant="contained">Botón</Button>
    </div>
  )
}
