import axios from 'axios' ;

export const apiCallTareas =  async (id) => {
    return axios
            .get(`http://localhost:9000/api/task?id=${id}`)
            .then((response) => response.data )
}
