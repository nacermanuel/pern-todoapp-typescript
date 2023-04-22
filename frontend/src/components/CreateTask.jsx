import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import React from 'react'

export default function CreateTask() {
  return (
    <div className='h-[10vh] mx-[5px] flex items-center justify-center m-[10px] gap-1.5'>
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
