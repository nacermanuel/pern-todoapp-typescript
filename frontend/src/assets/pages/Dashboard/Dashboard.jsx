import React from 'react'
import './Dashboard.css'

export default function Dashboard() {
  return (
    <div className='container'>
        <nav>
            <p>Manuel</p>
        </nav>
        <div className='innerBody'>
            <div className='leftbody'>
                <div className='pendingTasktable'></div>
            </div>
            <div className='rightbody'>
                <div className='tasknow'></div>
                <div className='tasknumbers'></div>
            </div>
        </div>
    </div>
  )
}
