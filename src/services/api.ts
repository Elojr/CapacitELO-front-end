import axios from 'axios'
import { parseCookies } from 'nookies'

export function getAPIClient(ctx?: any) {
    const { '@exame:token': token } = parseCookies(ctx)

    const baseURL = 'http://localhost:3333/v1'

    const api = axios.create({
        baseURL: baseURL,
    })

    if (token) {
        api.defaults.headers['Authorization'] = `Bearer ${token}`
    }

    return api;
}


export const api = getAPIClient()
