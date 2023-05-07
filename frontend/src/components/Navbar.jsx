import Avatar from '@mui/material/Avatar';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateDataBase } from '../redux/feature/tareasSlice';


export default function Navbar() {
  const dispatch = useDispatch();
  const { createdTask, modifiedTask, deletedTask } = useSelector((state) => state.todo_app)
  const [changes,setChanges] = React.useState(false)

  React.useEffect(() => {
    if(createdTask.length > 0 || modifiedTask.length > 0 || deletedTask.length > 0){
      setChanges(true)
      dispatch(updateDataBase())
    }else{
      setChanges(false)
    }
  }, [createdTask, modifiedTask, deletedTask]);

  return (
    <nav className='bg-zinc-600 w-[100%] h-[9vh] flex items-center rounded-md mt-0.5'>
      <div className='p-2 items-center justify-center'>
        <Avatar>N</Avatar>
      </div>
      { changes && <div className=' text-fuchsia-50'>Cambios pendientes</div> }
      
    </nav>
  )
}
