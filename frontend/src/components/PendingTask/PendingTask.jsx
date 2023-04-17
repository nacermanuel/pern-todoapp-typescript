import React from 'react'
import './PendingTask.css'
import CreateTask from '../CreateTask/CreateTask'
import TaskItem from '../TaskItem/TaskItem'

export default function PendingTask() {
  return (
    <div className='pendingTasktable'>
      <div className='listAll'>
          <TaskItem title={'ejemplo'}/>
          <TaskItem title={'ejemplo'}/>
          <TaskItem title={'ejemplo'}/>
          <TaskItem title={'ejemplo'}/>
      </div>
      <div>
        <CreateTask/>
      </div>
    </div>
  )
}
