import axios from 'axios' ;

export const apiLogin =  async (credentials) => {

    const headers = {
        'Content-Type': 'application/json', // Example header
    };

    return axios
            .post(`http://localhost:9000/api//auth/login`, credentials, { headers })
            .then((response) => response.data )
}