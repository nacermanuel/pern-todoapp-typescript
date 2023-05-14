import React, { useState} from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import  logo  from '../resources/logo.png'
import { apiCreateUser } from '../service/apiCreateUser';
import { Link } from "react-router-dom";


export const Register = () => {

    const [name, setName] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [respuesta, setRespuesta] = useState(false);
    const [error , setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!name.length || !apellido.length || !email.length || !password.length ){
            return setError('Campos incompletos')
        }else if(!email.includes('@') || !email.includes('.')  ){
            return setError('Ingrese un email valido.')
        }


        let user = { name: name , lastName: apellido, email: email, password: password }
        let userJson = JSON.stringify(user)
        try{
            setError('')
            let data = await apiCreateUser(userJson)

            if( typeof data =='object' ){
                setRespuesta(true)
                console.log('Usuario creado');
                console.log(data);
            }else{
                setError('No se puede crear usuario, información incorrecta')
                console.log(data);
            }
        }catch(e){
            setError('No se puede crear usuario, información incorrecta')
            console.log(e);
        }

    };
    
    return (
        
        <div className='flex flex-col justify-center items-center h-[100vh] bg-[url(https://res.cloudinary.com/dbhtt5ozr/image/upload/v1682117898/IMAGEN_OPACIDA222_Mesa_de_trabajo_1_copia_2_ctbno3.png)]'>
            <div className='bg-white flex flex-col justify-center items-center h-[90%] px-5 rounded-md'>
            <div className='pb-3'>
                <img src={logo} alt="logo" />
            </div>
            {
                !respuesta ? 
                    <>
                    <form className="mx-auto max-w-md" onSubmit={handleSubmit}>
                        <TextField
                            label="Nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            label="Apellido"
                            value={apellido}
                            onChange={(e) => setApellido(e.target.value)}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
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
                    { !!error.length && <p className='text-red-600 text-sm'>Error: {error}</p> }
                    <div className='pt-6 flex'>
                        ¿Ya tienes una cuenta?<Link to="/login"> <p className='font-bold'>Iniciar Sesion</p> </Link>
                    </div>
                    </>
                    :
                    <>
                    <h3>Usuario Creado con éxito. </h3>
                    <Link to="/login"><Button variant="contained" color="primary">Iniciar Sesion</Button> </Link>
                    </>
            }

            </div>
        </div>

    )
}
