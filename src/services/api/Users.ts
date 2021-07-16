import { AxiosRequestConfig } from 'axios'

interface ICreateUserDTO {
    body: {
        name: string
        email: string
        password: string
        course: string
        phone: string
        university: string
    }
}
export const CREATE_USER = ({ body }: ICreateUserDTO): AxiosRequestConfig => {
    return {
        url: '/users',
        method: 'post',
        data: body,
    }
}
