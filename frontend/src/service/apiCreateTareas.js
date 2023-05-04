import axios from 'axios' ;

export const apiCreateTareas =  async (task) => {
    return axios
            .post(`http://localhost:9000/api/task`, task)
            .then((response) => response.data )
}