import { Button } from '@mui/material'
import React from 'react'


export default function TaskItem(props) {
  return (
    <div className='bg-white h-[10vh] w-[97%] flex items-center justify-around rounded-md'>
        <p>{props.title}</p>
        <Button variant="contained">Botón</Button>
    </div>
  )
}
