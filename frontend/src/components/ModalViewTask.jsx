import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import * as React from 'react';
import { useDispatch } from 'react-redux';
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

export default function ModalViewTask({open , onClose, data}) {
  const [title, setTitle] = React.useState(data.name);
  const [description, setDescripcion] = React.useState(data.description);
  const dispatch = useDispatch();

  const changeTitle = (e) => {
    if(e.target.id == 'titulo'){
      setTitle(e.target.value)
    }else{
      setDescripcion(e.target.value)
    }
  }

  React.useEffect(()=>{
    if(open){
      setTitle(data.name)
      setDescripcion(data.description)
    }
  },[open])

  const handleUpdate = () =>{
    dispatch(updateTarea({...data, name: title,description:description}))
  }


  return (
        <Modal
          open={open}
          onClose={onClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <TextField id="titulo" label="Título" variant="outlined" value={title} onChange={changeTitle} sx={{width:"100%"}}/>
            <TextField id="description" label="Descripción" variant="outlined" value={description} onChange={changeTitle} multiline rows={4} sx={{width:"100%"}}/>
            <Chip label={`Esta tarea fue creada el ${data.date.year}-${data.date.month}-${data.date.day}`} color="primary" sx={{fontSize: '0.9rem', width:'100%'}}/>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Aqui voy a poner una frase motivaiconal.
            </Typography>


              <Box sx={{display: 'flex', flexDirection: 'row', width: '55vw', justifyContent: 'center', gap: '5vw'}}>
            {/* El boton esta disable si no hay cambios */}                
                <Button variant="contained" onClick={handleUpdate}>Actualizar</Button>
                <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>Eliminar</Button>
            {/* El boton esta disable si hay alguna en HACIENDO AHORA */}    
                <Button variant="contained" endIcon={<SendIcon />} color="secondary">Hacer Ahora</Button>
              </Box>

          </Box>
        </Modal>
  )
}
