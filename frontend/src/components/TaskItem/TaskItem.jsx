import React from 'react'
import './TaskItem.css'

export default function TaskItem(props) {
  return (
    <div className='taskitem'>
        <p>{props.title}</p>
        <button>Ver</button>
    </div>
  )
}
