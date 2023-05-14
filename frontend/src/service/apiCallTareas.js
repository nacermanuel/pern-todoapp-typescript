import axios from 'axios' ;

export const apiCallTareas =  async () => {
 
    const token = localStorage.getItem("token")

    const headers = {
        Authorization: `Bearer ${token}`
    };

    return axios
            //.get(`http://localhost:9000/api/task?id=${id}`)
            .get(`http://localhost:9000/api/list`, { headers })
            .then((response) => response.data.tasks )
}
