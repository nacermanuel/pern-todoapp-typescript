import axios from 'axios' ;
import { url } from './url';

export const apiCreateUser =  async (user) => {

    const headers = {
        'Content-Type': 'application/json', // Example header
    };

    return axios
            .post(`https://${url}/api/auth/register`, user, { headers })
            .then((response) => response.data )
}