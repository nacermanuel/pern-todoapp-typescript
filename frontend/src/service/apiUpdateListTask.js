import axios from 'axios' ;

export const apiUpdateListTask =  async (task) => {

    const token = localStorage.getItem("token")

    const headers = {
        'Content-Type': 'application/json', // Example header
        Authorization: `Bearer ${token}`
    };
    
    return axios
            .post(`http://localhost:9000/api/listupdate`, task, { headers })
            .then((response) => response.data )
}