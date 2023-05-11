import React from 'react'
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

export const StatisticsTable = () => {
  return (
    <div className='bg-slate-300 h-[20vh] w-[40vw] p-3 rounded-md shadow-[0_0_10px_4px_rgba(0,0,0)]'>
      <div className=' h-[63vh] overflow-y-auto'>
        <div className='flex flex-col justify-center items-center gap-[9px]'>
        {/* <Chip label={`Ha cimpletado X tareas en X días. Le toma en promedio ${`a`} dias completar una tarea. `} color="primary" sx={{fontSize: '0.9rem', width:'100%'}}/> */}
        
        <Chip
          sx={{
            height: 'auto',
            '& .MuiChip-label': {
              display: 'block',
              whiteSpace: 'normal',
            },
          }}
          label={`Ha cimpletado X tareas en X días. Le toma en promedio ${`a`} dias completar una tarea. `}
        />
        
        </div>

      </div>
    </div>
  )
}
