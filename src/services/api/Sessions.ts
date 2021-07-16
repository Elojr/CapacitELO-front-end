import { AxiosRequestConfig } from 'axios'

interface ICreateSessionDTO {
    body: {
        email: string
        password: string
    }
}
export const CREATE_SESSION = ({
    body,
}: ICreateSessionDTO): AxiosRequestConfig => {
    return {
        url: '/sessions',
        method: 'post',
        data: body,
    }
}
