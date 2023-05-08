import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

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
    const [changes, setChanges] = React.useState(false)



  return (
    <div className='bg-slate-300 h-[60vh] w-[40vw] p-3 rounded-md shadow-[0_0_10px_4px_rgba(0,0,0)]'>
      <div className=' h-[63vh] overflow-y-auto'>

        <div>FOCUS ON:</div> 
        <div className='flex flex-col justify-center items-center gap-[7px]'>
            <TextField id="titulo" label="Título" variant="outlined" value={`title`}  sx={{width:"100%"}}/>
            <TextField id="description" label="Descripción" variant="outlined" value={`description`} multiline rows={2} sx={{width:"100%"}}/>
            <Chip label={`Esta tarea fue creada el ${`d2`}-${`d2`}-${`2323`}`} color="primary" sx={{fontSize: '0.9rem', width:'100%'}}/>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Aqui voy a poner una frase motivaiconal.
            </Typography>
            
            <div>
                <Button id={`q`} variant="outlined" color="error" >Regresar a Pendientes</Button>
                { changes ?
                  <Button variant="contained" onClick={handleUpdate}>Actualizar</Button>
                  :
                  <Button variant="contained" disabled>Actualizar</Button>
                }
            </div>
            <div>
                <Button variant="contained" color="secondary">Marcar como completada!</Button>
            </div>
              {/* <Box sx={{display: 'flex', flexDirection: 'row', width: '55vw', justifyContent: 'center', gap: '5vw'}}>
                <Button variant="contained" color="secondary">Hacer Ahora</Button>
              </Box> */}
        </div>
      </div>
    </div>
  )
}
