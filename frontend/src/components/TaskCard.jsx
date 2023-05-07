import Button from '@mui/material/Button';
import * as React from 'react';
import ModalViewTask from './ModalViewTask';
import { useDispatch , useSelector} from 'react-redux';
import { orderChange, updateDataBase } from '../redux/feature/tareasSlice';


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
    dispatch(updateDataBase())
  }

  const changeDown = (e)=>{
    let id = Number(e.target.id)
    let newArray = [...current]
    let element1 = newArray[id+1]
    let element2 = newArray[id]
    newArray[id] = element1
    newArray[id+1] = element2
    dispatch(orderChange(newArray))
    dispatch(updateDataBase())
  }

  return (
    <div className='bg-white min-h-[10vh] h-auto w-[97%] flex items-center justify-around rounded-md'>
        <div className='w-[70%]'>
          <p className='ml-2 my-2 text-sm text-center'>{data.name}</p>
        </div>
        <div className='flex justify-center items-center w-[25%]'>
          <Button onClick={handleOpen} variant="contained">Ver</Button>
        </div>
        <div className='flex flex-col mx-1 w-[5%]'>
          { index !== 0 && <button id={index}  onClick={changeUp}>&#8679;</button> }
          { length !== (index+1) && <button id={index}  onClick={changeDown}>&#8681;</button>  }
        </div>       
        {open && <ModalViewTask open={open} onClose={handleClose} data={data}/>}
    </div>
  )
}
