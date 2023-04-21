import React from 'react'
import Stack from '@mui/joy/Stack';

import TaskItem from './TaskItem'

import { mockTasks } from '../mocks/mockTask';

export default function TablePendingTask() {
  return (

    <div className='bg-yellow-200 h-[77vh] w-[55vh]'>
      <div className=' h-[63vh] overflow-y-auto'>
        <Stack spacing={0.5} sx={{ alignItems:'center', paddingTop:'5px' }} > {/*https://mui.com/material-ui/react-stack/ */}
          {mockTasks.map(e => {
            return <TaskItem title={e.name}/>
          })}
        </Stack>
      </div>
      <div>
        hola
      </div>
    </div>
    //   <div className='listAll'>
    //       <TaskItem title={'ejemplo'}/>
    //       <TaskItem title={'ejemplo'}/>
    //       <TaskItem title={'ejemplo'}/>
    //       <TaskItem title={'ejemplo'}/>
    //   </div>
    //   <div>
    //     <CreateTask/>
    //   </div>
    //
  )
}
