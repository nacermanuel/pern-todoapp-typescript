import React from 'react'
import { useDispatch } from 'react-redux'
import Navbar from '../../components/Navbar'
import TablePendingTask from '../../components/TablePendingTask'
import { fetchTareas , updateDataBase} from '../../redux/feature/tareasSlice'
import { DoingNowTable } from '../../components/DoingNowTable'

const Dashboard = () => {

  //const idUsuario = 'b3ed8513-9f10-4b56-92c4-86eec76d19e7' 
  // ESTO DEBE SER TOMADO DE LA SESION INICIADA
  // ESTO DEBE SER TOMADO DE LA SESION INICIADA
  // ESTO DEBE SER TOMADO DE LA SESION INICIADA

  const dispatch = useDispatch();

  React.useEffect(()=>{
    dispatch(fetchTareas())
    console.log('Se hizo el dispatch de tareas desde la BBDD');
  },[])


  return (
    <div>
        <Navbar/>
        <div className=' w-[100%] h-[90vh] flex justify-center items-center gap-[10px] bg-[url(https://res.cloudinary.com/dbhtt5ozr/image/upload/v1682117898/IMAGEN_OPACIDA222_Mesa_de_trabajo_1_copia_2_ctbno3.png)] rounded-md'>
          <div className=' w-full h-full flex justify-center items-center '>
            <TablePendingTask/>
          </div>
          <div className=' w-full h-full flex justify-center items-center'>
            <DoingNowTable/>
          </div>
        </div>
    </div>
  )
}

export default Dashboard
