import axios from 'axios' ;

export const apiDeleteTareas =  async (id) => {
    return axios
            .delete(`http://localhost:9000/api/task`, {params:{id: id}})
            .then((response) => response.data )
}