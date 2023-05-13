import React, { useState} from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import  logo  from '../resources/logo.png'
import { Link } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // You can access the form values (name, email, password) and perform further actions like validation or API calls
    };
    
    return (
        <>
        <div className='flex flex-col justify-center items-center h-[100vh] bg-[url(https://res.cloudinary.com/dbhtt5ozr/image/upload/v1682117898/IMAGEN_OPACIDA222_Mesa_de_trabajo_1_copia_2_ctbno3.png)]'>
            <div className='bg-white flex flex-col justify-center items-center h-[65%] px-5 rounded-md'>
            <div className='pb-3'>
                <img src={logo} alt="logo" />
            </div>
            <p className=' font-extrabold'>Log In</p>
            <form className="mx-auto max-w-md" onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                />
                <Button type="submit" variant="contained" color="primary" sx={{ width: '100%' }}>
                    Registrarse
                </Button>
            </form>
            <div className='pt-6 flex '>
                ¿Aún no tienes una cuenta? <Link to="/register"> <p className='font-bold'>Registrarse</p> </Link>
            </div>
            </div>
            <Button type="submit" variant="contained" color="secondary" sx={{ marginTop: 3  }} onClick={()=>{
                setEmail('usuarioprueba@gmail.com')
                setPassword('1234')
            }}>
                User trial account
            </Button>            
        </div>
        </>

    )
}
