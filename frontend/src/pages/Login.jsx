import React, { useState} from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import  logo  from '../resources/logo.png'
import { Link } from "react-router-dom";
import { apiLogin } from '../service/apiLogin';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error , setError] = useState('');   

    const handleSubmit = async (e) => {
        e.preventDefault();
        if( !email.length || !password.length ){
            return setError('Campos incompletos')
        }else if(!email.includes('@') || !email.includes('.')  ){
            return setError('Ingrese un email valido.')
        }

        let login = { email: email, password: password }
        let loginJson = JSON.stringify(login)

        try{
            setError('')
            let data = await apiLogin(loginJson)

            if( typeof data =='object' ){

                console.log('Usuario loggeado');
                console.log(data.token);
                localStorage.setItem("token", data.token)
                //REDIRIGIR AL DASHBOARD
                window.location.assign('/dashboard')
            }else{
                setError('No se puede logear usuario, información incorrecta')
                console.log(data);
            }
        }catch(e){
            setError('No se puede hacer login, error en la llamada')
            console.log(e);
        }
    };
    
    return (
        <>
        <div className='flex flex-col justify-center items-center h-[100vh] bg-[url(https://res.cloudinary.com/dbhtt5ozr/image/upload/v1682117898/IMAGEN_OPACIDA222_Mesa_de_trabajo_1_copia_2_ctbno3.png)]'>
            <div className='bg-white flex flex-col justify-center items-center h-[65%] px-5 rounded-md'>
            <div className='pb-3'>
                <img src={logo} alt="logo" />
            </div>
            <p className=' font-extrabold'>Log In</p>
            <form className="mx-auto max-w-md" >
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
                <Button  variant="contained" color="primary" sx={{ width: '100%' }} onClick={handleSubmit}>
                    Iniciar Sesión
                </Button>
            </form>
            { !!error.length && <p className='text-red-600 text-sm'>Error: {error}</p> }
            
            <div className='pt-6 flex '>
                ¿Aún no tienes una cuenta? <Link to="/register"> <p className='font-bold'>Registrarse</p> </Link>
            </div>
            </div>
            <Button type="submit" variant="contained" color="secondary" sx={{ marginTop: 3  }} onClick={()=>{
                setEmail('usuarioprueba@gmail.com')
                setPassword('12345')
            }}>
                User trial account
            </Button>            
        </div>
        </>

    )
}
