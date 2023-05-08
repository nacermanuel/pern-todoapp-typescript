import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { useSelector , useDispatch} from 'react-redux';
import { updateTarea } from '../redux/feature/tareasSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '80vh',
  width: '55vw',
  bgcolor: 'background.paper',
  border: '2px solid #39e3e3',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  gap: 2
};


export const DoingNowTable = () => {
    const tareaNow = useSelector((state) => state.todo_app.tareas).filter(e=> e.now === true)[0]
    const [changes, setChanges] = React.useState(false)
    const [title, setTitle] = React.useState('');
    const [description, setDescripcion] = React.useState('');
    const dispatch = useDispatch();

    
    React.useEffect(()=>{
        if(tareaNow){
            setTitle(tareaNow.name)
            setDescripcion(tareaNow.description)
        }
        console.log(` inside tareaNow`);        
        console.log(tareaNow);
    }, [tareaNow])

    const changeInput = (e) => {
        if(e.target.id == 'titulo'){
            setTitle(e.target.value)
            setChanges(true)
        }else{
            setDescripcion(e.target.value)
            setChanges(true)
        }
    }

    const handleUpdate = () =>{
        dispatch(updateTarea({...tareaNow, name: title,description:description}))
        setChanges(false)
    }

    const backToPending = () =>{
        dispatch(updateTarea({...tareaNow, now:false}))
        setChanges(false)
    }



  return (
    <div className='bg-slate-300 h-[55vh] w-[40vw] p-3 rounded-md shadow-[0_0_10px_4px_rgba(0,0,0)]'>
      <div className=' h-[63vh] overflow-y-auto'>
            <div className='font-bold text-center'>ENFOCARSE EN LA SIGUIENTE TAREA:</div> 
            {   
                !!tareaNow ?  
                  
                <div className='flex flex-col justify-center items-center gap-[9px]'>
                <TextField id="titulo" label="Título" variant="outlined" value={title} onChange={changeInput} sx={{width:"100%"}}/>
                <TextField id="description" label="Descripción" variant="outlined" value={description} onChange={changeInput} multiline rows={2} sx={{width:"100%"}}/>
                <Chip label={`Esta tarea fue creada el ${tareaNow.date.year}-${tareaNow.date.month}-${tareaNow.date.day}`} color="primary" sx={{fontSize: '0.9rem', width:'100%'}}/>
                <div className='w-[100%] flex justify-around items-center'>
                    <Button id={`q`} variant="outlined" color="error" onClick={backToPending} >Regresar a Pendientes</Button>
                    { changes &&
                    <Button variant="contained" onClick={handleUpdate}>Actualizar</Button>
                    }
                </div>
                <div>
                    <Button variant="contained" color="secondary">Marcar como completada!</Button>
                </div>
                </div>
                :
                <div>Eliga una tarea a realizar en este momento</div>
            }
      </div>
    </div>
  )
}
