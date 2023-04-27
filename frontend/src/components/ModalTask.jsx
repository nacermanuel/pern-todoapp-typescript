import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import * as React from 'react';

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

export default function ModalTask({open , onClose, data}) {

  return (
        <Modal
          open={open}
          onClose={onClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <TextField id="outlined-basic" label="Título" variant="outlined" defaultValue={data.name} sx={{width:"100%"}}/>
            <TextField id="outlined-basic" label="Descripción" variant="outlined" defaultValue={data.description} multiline rows={4} sx={{width:"100%"}}/>
            <Chip label={`Esta tarea fue creada el ${data.name}`} color="primary" sx={{fontSize: '0.9rem', width:'100%'}}/>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Aqui voy a poner una frase motivaiconal.
            </Typography>

            {/* Aqui podria venir el boton en disable y si hay cambios se activa */}
              <Box sx={{display: 'flex', flexDirection: 'row', width: '55vw', justifyContent: 'center', gap: '5vw'}}>
                <Button variant="contained">Actualizar</Button>
                <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>Eliminar</Button>
                <Button variant="contained" endIcon={<SendIcon />} color="secondary">Hacer Ahora</Button>
              </Box>

          </Box>
        </Modal>
  )
}
