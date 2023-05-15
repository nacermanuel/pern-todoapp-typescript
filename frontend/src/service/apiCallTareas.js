import axios from 'axios' ;
import { url } from './url';

export const apiCallTareas =  async () => {
 
    const token = localStorage.getItem("token")

    const headers = {
        Authorization: `Bearer ${token}`
    };

    return axios
            .get(`https://${url}/api/list`, { headers })
            .then((response) => response.data.tasks )
}
