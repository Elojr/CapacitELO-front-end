import { AxiosRequestConfig } from 'axios'

interface IResetPasswordDTO {
    body: {
        token: string
        password: string
    }
}
export const RESET_PASSWORD = ({
    body,
}: IResetPasswordDTO): AxiosRequestConfig => {
    return {
        url: '/password/reset',
        method: 'post',
        data: body,
    }
}
interface ISendEmailForgotPasswordDTO {
    body: {
        email: string
    }
}
export const SEND_EMAIL_FORGOT_PASSWORD = ({
    body,
}: ISendEmailForgotPasswordDTO): AxiosRequestConfig => {
    return {
        url: '/password/forgot',
        method: 'post',
        data: body,
    }
}
