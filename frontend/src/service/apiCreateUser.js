import axios from 'axios' ;

export const apiCreateUser =  async (user) => {

    const headers = {
        'Content-Type': 'application/json', // Example header
    };

    return axios
            .post(`http://localhost:9000/api/user`, user, { headers })
            .then((response) => response.data )
}