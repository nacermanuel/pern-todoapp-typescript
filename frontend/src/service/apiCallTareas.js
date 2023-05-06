import axios from 'axios' ;

export const apiCallTareas =  async () => {
    return axios
            //.get(`http://localhost:9000/api/task?id=${id}`)
            .get(`http://localhost:9000/api/list`)
            .then((response) => response.data.tasks )
}
