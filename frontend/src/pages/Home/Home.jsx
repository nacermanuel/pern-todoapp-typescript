import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <div className='container'>
        <div className='subcontainer_one'>
          <p>¿Necesitas dejas de procrastinar?</p>
          <p>Estás en el lugar correcto.</p>
        </div>
        <div className='subcontainer_two'>
            <div className='subcontainer_botones'>
              <button>Boton 1</button>
              <button>Boton 2</button>
            </div>
            <p>Empeza a ser productivo!</p>
        </div>
    </div>
  )
}
