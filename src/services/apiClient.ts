import * as next from 'next'
import axios, { AxiosInstance } from 'axios'
import { parseCookies } from 'nookies'

interface IGetApiClientDTO {
    ctx?:
        | Pick<next.NextPageContext, 'req'>
        | {
              req: next.NextApiRequest
          }
        | null
        | undefined
    baseURL: string
}

export const getApiClient = ({
    ctx,
    baseURL,
}: IGetApiClientDTO): AxiosInstance => {
    const api = axios.create({
        baseURL: baseURL,
    })
    const { '@exame:token': token } = parseCookies(ctx)
    if (token) {
        api.defaults.headers['Authorization'] = `Bearer ${token}`
    }
    return api
}

interface IUpdateApiClientTokenDTO {
    api: AxiosInstance
    token: string
}
export const updateTokenApiClient = ({
    api,
    token,
}: IUpdateApiClientTokenDTO): void => {
    api.defaults.headers['Authorization'] = token
}
