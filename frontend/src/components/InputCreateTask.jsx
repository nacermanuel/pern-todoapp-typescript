import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import React from 'react'
import ModalCreateTask from './ModalCreateTask';

export default function InputCreateTask() {
  const [open, setOpen] = React.useState(false);
  const [title,setTilte] = React.useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) =>{
      setTilte(e.target.value)
  }

  React.useEffect(()=>{
    if(open === true){
      setTilte('')
    }
  },[open])


  return (
    <div className='h-[10vh] mx-[5px] flex items-center justify-center m-[10px] gap-1.5'>
        <TextField
          label="Nueva Tarea"
          id="outlined-size-small"
          placeholder="Título"
          size="small"
          value={title}
          onChange={handleChange}
          ></TextField>
          <Button onClick={handleOpen} variant="contained">Crear</Button>
          { open && <ModalCreateTask open={open} onClose={handleClose} title={title}/>}
    </div>
  )
}
