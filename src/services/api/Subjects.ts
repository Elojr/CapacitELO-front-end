import { AxiosRequestConfig } from 'axios'

interface IListSubjectsDTO {
    params?: {
        subject_name?: string
        page?: number
    }
}
export const LIST_SUBJECTS = ({
    params = {},
}: IListSubjectsDTO): AxiosRequestConfig => {
    return {
        url: '/subjects',
        method: 'get',
        params: params,
    }
}
