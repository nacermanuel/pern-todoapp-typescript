import Button from '@mui/material/Button';
import * as React from 'react';
import ModalViewTask from './ModalViewTask';
import { useDispatch , useSelector} from 'react-redux';
import { orderChange } from '../redux/feature/tareasSlice';


export default function TaskCard({data, index, length}) {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const current = useSelector((state) => state.todo_app.tareas)

  const changeUp = (e)=>{
    let id = Number(e.target.id)
    let newArray = [...current]
    let element1 = newArray[id-1]
    let element2 = newArray[id]
    newArray[id] = element1
    newArray[id-1] = element2
    dispatch(orderChange(newArray))
  }

  const changeDown = (e)=>{
    let id = Number(e.target.id)
    let newArray = [...current]
    let element1 = newArray[id+1]
    let element2 = newArray[id]
    newArray[id] = element1
    newArray[id+1] = element2
    dispatch(orderChange(newArray))
  }

  return (
    <div className='bg-white h-[10vh] w-[97%] flex items-center justify-around rounded-md'>
        <p>{data.name}</p>
        <Button onClick={handleOpen} variant="contained">Ver</Button>
        <div className='flex flex-col'>
          { index !== 0 && <button id={index}  onClick={changeUp}>&#8679;</button> }
          { length !== (index+1) && <button id={index}  onClick={changeDown}>&#8681;</button>  }
        </div>       
        {open && <ModalViewTask open={open} onClose={handleClose} data={data}/>}
    </div>
  )
}
