import Button from '@mui/material/Button';
import * as React from 'react';
import ModalViewTask from './ModalViewTask';
import { useDispatch } from 'react-redux';
import { orderChangeUp } from '../redux/feature/tareasSlice';


export default function TaskCard({data, index}) {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const changeUp = (e)=>{
    dispatch(orderChangeUp(e.target.id))
  }

  const changeDown = (e)=>{
    console.log('change down TaskCard');
  }

  return (
    <div className='bg-white h-[10vh] w-[97%] flex items-center justify-around rounded-md'>
        <p>{data.name}</p>
        <Button onClick={handleOpen} variant="contained">Ver</Button>
        <div className='flex flex-col'>
          <button id={index}  onClick={changeUp}>&#8679;</button>
          <button id={index}  onClick={changeDown}>&#8681;</button> 
        </div>       
        {open && <ModalViewTask open={open} onClose={handleClose} data={data}/>}
    </div>
  )
}
