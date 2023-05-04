import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../components/Navbar'
import TablePendingTask from '../../components/TablePendingTask'
import { fetchTareas , updateDataBase} from '../../redux/feature/tareasSlice'

const Dashboard = () => {

  const idUsuario = 'b3ed8513-9f10-4b56-92c4-86eec76d19e7' 
  // ESTO DEBE SER TOMADO DE LA SESION INICIADA
  // ESTO DEBE SER TOMADO DE LA SESION INICIADA
  // ESTO DEBE SER TOMADO DE LA SESION INICIADA

  const dispatch = useDispatch();

  React.useEffect(()=>{
    dispatch(fetchTareas(idUsuario))
    alert('Se hizo el dispatch de tareas desde la BBDD')
  },[])


  const prueba = () => {
    dispatch(updateDataBase())
    alert('se despacho el update')
  }

  return (
    <div>
        <Navbar/>
        <div className=' w-[100%] h-[90vh] flex justify-center items-center gap-[10px] bg-[url(https://res.cloudinary.com/dbhtt5ozr/image/upload/v1682117898/IMAGEN_OPACIDA222_Mesa_de_trabajo_1_copia_2_ctbno3.png)] rounded-md'>
          <div className=' w-full h-full flex justify-center items-center '>
            <TablePendingTask/>
          </div>
          <div className=' w-full h-full'></div>
        </div>

        <button onClick={prueba}>probar QUITAR ESTO DESPUES DE DEFINIR DONDE IRA LA ACCION</button>
    </div>
  )
}

export default Dashboard
