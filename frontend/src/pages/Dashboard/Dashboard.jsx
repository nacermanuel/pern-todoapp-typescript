import React from 'react'

import './Dashboard.css'
import PendingTask from '../../components/PendingTask/PendingTask'
import Navbar from '../../components/navbar/navbar'

export default function Dashboard() {
  return (
    <div className='container'>
        <Navbar/>
        <div className='innerBody'>
            <div className='leftbody'>
                <PendingTask/>
            </div>
            <div className='rightbody'>
                {/* AQUI IRA EL COMPONEN */}
                <div className='tasknow'></div>
                {/* AQUI IRA EL COMPONEN */}
                <div className='tasknumbers'></div>
            </div>
        </div>
    </div>
  )
}
