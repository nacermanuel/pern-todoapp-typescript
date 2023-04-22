import Button from '@mui/material/Button';
import * as React from 'react';
import ModalTask from './ModalTask';


export default function TaskCard({data}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='bg-white h-[10vh] w-[97%] flex items-center justify-around rounded-md'>
        <p>{data.name}</p>
        <Button onClick={handleOpen} variant="contained">Ver</Button>        
        <ModalTask open={open} onClose={handleClose} data={data}/>
    </div>
  )
}
