import axios from 'axios' ;
import { url } from './url';

export const apiUpdateListTask =  async (task) => {

    const token = localStorage.getItem("token")

    const headers = {
        'Content-Type': 'application/json', // Example header
        Authorization: `Bearer ${token}`
    };
    
    return axios
            .post(`https://${url}/api/listupdate`, task, { headers })
            .then((response) => response.data )
}