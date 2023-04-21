import React from 'react'
import Navbar from '../../components/Navbar'
import TablePendingTask from '../../components/PendingTask'


const Dashboard = () => {
  return (
    <div>
        <Navbar/>
        <div className='bg-red-300 w-[100%] h-[95vh] flex justify-center items-center gap-[10px] p-[10px] '>
          <div className='bg-slate-600 w-full h-full flex justify-center items-center'>
            <TablePendingTask/>
          </div>
          <div className='bg-slate-600 w-full h-full'>b</div>
        </div>
    </div>
  )
}

export default Dashboard
