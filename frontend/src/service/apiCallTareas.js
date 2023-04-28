import axios from 'axios' ;

export const apiCallTareas =  async (id) => {
    return axios
            .get(`https://script.google.com/macros/s/AKfycbwxLMD4gFb2t5QzvGjcs19inT1B9Ja-my2GmMjnokJHyqFnuSB9DYMGU6UzDDQLF8Jydw/exec?id=${id}`)
            .then((response) => response.data )
}
