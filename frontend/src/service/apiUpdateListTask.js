import axios from 'axios' ;

export const apiUpdateListTask =  async (task) => {
    return axios
            .post(`http://localhost:9000/api/listupdate`, task)
            .then((response) => response.data )
}