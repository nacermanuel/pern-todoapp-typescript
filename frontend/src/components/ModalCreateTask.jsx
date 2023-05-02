import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { createTarea } from '../redux/feature/tareasSlice';

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

const userId = 'b3ed8513-9f10-4b56-92c4-86eec76d19e7'
//ESTE USERID LO DEBE TOMAR DE LA SESION INICIADA
//ESTE USERID LO DEBE TOMAR DE LA SESION INICIADA
//ESTE USERID LO DEBE TOMAR DE LA SESION INICIADA


export default function ModalCreateTask({open , onClose, title}) {
    const [ descripcion, setDescripcion] = React.useState('')
    const [ titulo, setTitulo] = React.useState(title)
    const [ fecha, setFecha ] = React.useState({year:0,month:0,day:0})
    const [id ,setId] = React.useState(uuidv4())
    const dispatch = useDispatch()


    React.useEffect(()=>{
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1; // los meses se indexan desde 0 (enero) hasta 11 (diciembre)
        const day = today.getDate();
        setFecha({year:year,month:month,day:day})
        //alert(`${year}-${month}-${day}`); // formato "AAAA-MM-DD"
    },[])

    const handleChangeTitulo = (e) =>{
        setTitulo(e.target.value)
    }

    const handleChangeDescripcion = (e) =>{
        setDescripcion(e.target.value)
    }

    const handleCreate = ()=>{
      dispatch(createTarea({id:id, name:titulo, description: descripcion, userId: userId, date:fecha, complete: false}))
      onClose()
    }

  return (
        <Modal
          open={open}
          onClose={onClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <TextField id="outlined-basic" label="Título" variant="outlined" value={titulo} onChange={handleChangeTitulo}  sx={{width:"100%"}}/>
            <TextField id="outlined-basic" label="Descripción" variant="outlined" value={descripcion} onChange={handleChangeDescripcion} multiline rows={4} sx={{width:"100%"}}/>
            <Chip label={`Fecha de creación ${fecha.year}-${fecha.month}-${fecha.day}`} color="primary" sx={{fontSize: '0.9rem', width:'100%'}}/>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Aqui voy a poner una frase motivaiconal.
            </Typography>


              <Box sx={{display: 'flex', flexDirection: 'row', width: '55vw', justifyContent: 'center', gap: '5vw'}}>
            {/* El boton esta disable si no hay cambios */}                
                <Button variant="outlined" onClick={onClose} color="error" startIcon={<DeleteIcon />}>Descartar</Button>
            {/* El boton esta disable si hay alguna en HACIENDO AHORA */}    
                <Button onClick={handleCreate} variant="contained" endIcon={<SendIcon />} color="secondary">Crear</Button>
              </Box>

          </Box>
        </Modal>
  )
}
