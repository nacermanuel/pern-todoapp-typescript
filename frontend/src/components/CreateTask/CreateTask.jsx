import React from 'react'
import './CreateTask.css'
import icon1 from '../../../public/mas.png'

export default function CreateTask() {
  return (
    <div className='CreateTask'>
        <input type="text" />
        <img src={icon1} alt="icono crear" onClick={()=> alert('Crear')}/>
    </div>
  )
}
