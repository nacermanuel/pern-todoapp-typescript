import Stack from '@mui/joy/Stack';
import React from 'react'


import { mockTasks } from '../mocks/mockTask';
import CreateTask from './CreateTask';
import TaskCard from './TaskCard';

export default function TablePendingTask() {
  return (

    <div className='bg-slate-300 h-[77vh] w-[55vh] p-3 rounded-md shadow-[0_0_10px_4px_rgba(0,0,0)]'>
      <div className=' h-[63vh] overflow-y-auto'>
        <Stack spacing={1} sx={{ alignItems:'center', paddingTop:'5px' }} > {/*https://mui.com/material-ui/react-stack/ */}
          {mockTasks.map(e => {
            return <TaskCard data={e}/>
          })}
        </Stack>
      </div>
      <div>
        <CreateTask/>
      </div>
    </div>
  )
}
