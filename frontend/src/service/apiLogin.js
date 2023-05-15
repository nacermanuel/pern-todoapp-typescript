import axios from 'axios' ;
import { url } from './url';

export const apiLogin =  async (credentials) => {

    const headers = {
        'Content-Type': 'application/json', // Example header
    };

    return axios
            .post(`https://${url}/api/auth/login`, credentials, { headers })
            .then((response) => response.data )
}