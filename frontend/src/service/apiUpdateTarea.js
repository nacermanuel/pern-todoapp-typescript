import axios from 'axios' ;

export const apiUpdateTarea =  async (task) => {
    return axios
            .post(`http://localhost:9000/api/taskupdate`, task)
            .then((response) => response.data )
}