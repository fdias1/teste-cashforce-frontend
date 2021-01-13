import axios from 'axios'

const baseURL = process.env.API_BASE_URL || 'http://localhost:3000/v1'
const token = process.env.TOKEN

const api = axios.create({
    baseURL,
    headers:{
        token
    }

})

export default api