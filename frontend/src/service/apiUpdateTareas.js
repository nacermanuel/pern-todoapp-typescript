import axios from 'axios' ;

export const apiUpdateTareas =  async (task) => {
    return axios
            .post(`http://localhost:9000/api/task`, task)
            .then((response) => response.data )
}