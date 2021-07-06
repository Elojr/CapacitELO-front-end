import axios from 'axios'

const baseURL = 'http://localhost:3333/v1'

export const api = axios.create({
    baseURL: baseURL,
})
