import React from 'react'
import { Button } from '@mui/material'
//import './Home.css'

export default function Home() {
  return (
    <div className='flex flex-col m-[5px] gap-[10px] h-[95vh]'>
        <div className=' h-[60%] bg-[#ffffff] flex flex-col justify-center items-center'>
          <p>¿Necesitas dejas de procrastinar?</p>
          <p>Estás en el lugar correcto.</p>
        </div>
        <div className='h-[40%] bg-[#ffffff] flex flex-col justify-center items-center'>
            <div className='w-[50%] flex flex-row justify-center items-center gap-[15px]'>
              <Button variant="contained" color='secondary'>Botón 1</Button>
              <Button variant="contained">Botón 2</Button>
            </div>
            <p>Empeza a ser productivo!</p>
        </div>

        <p>PONER OPCION A QUE INICIEN SESION CON USUARIOS CREADOS PARA MOSTRAR GUARDO POR SESION</p>
    </div>
  )
}
