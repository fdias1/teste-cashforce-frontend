import axios from 'axios'

const baseURL = process.env.VUE_APP_API_BASE_URL
const token = process.env.VUE_APP_API_TOKEN

const api = axios.create({
    baseURL,
    headers:{
        token
    }
})

export default api