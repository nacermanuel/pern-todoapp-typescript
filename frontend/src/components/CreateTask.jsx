import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function CreateTask() {
  return (
    <div className='bg-amber-400 h-[10vh] mx-[5px] flex items-center justify-center'>
        <TextField
          label="Nueva Tarea"
          id="outlined-size-small"
          placeholder="Título"
          size="small"
          ></TextField>
          <Button variant="contained">Crear</Button>
        
    </div>
  )
}
