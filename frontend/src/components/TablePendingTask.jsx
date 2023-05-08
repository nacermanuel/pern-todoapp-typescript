import Stack from '@mui/joy/Stack';
import React from 'react'
import { useSelector } from 'react-redux';

import InputCreateTask from './InputCreateTask';
import TaskCard from './TaskCard';

export default function TablePendingTask() {
  const reduxState = useSelector((state) => state.todo_app)

  return (
    <div className='bg-slate-300 h-[77vh] w-[27vw] p-3 rounded-md shadow-[0_0_10px_4px_rgba(0,0,0)]'>
      <div className=' h-[63vh] overflow-y-auto'>
        { reduxState.loading && <div>Loading</div> }
        { !reduxState.loading && reduxState.error ? <div>Error: {reduxState.error}</div> : null}
        { !reduxState.loading && reduxState.tareas.length ?
        <Stack spacing={1} sx={{ alignItems:'center', paddingTop:'5px' }} > {/*https://mui.com/material-ui/react-stack/ */}
          { reduxState.tareas &&
            reduxState.tareas.filter(e=> e.now === false && e.complete === false).map((e,i,a) => {
              
              return <TaskCard key={e.id} data={e} index={i} length={a.length}/>
            })
          }
        </Stack> : null }
      </div>
      <div>
        <InputCreateTask/>
      </div>
    </div>
  )
}
