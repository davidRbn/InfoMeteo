import axios from 'axios'


 const apiMeteo = axios.create({
    baseURL:'https://api.meteo-concept.com/api/'
})

export default apiMeteo

