import * as yup from 'yup'

export const signInSchema = yup.object().shape({
    email: yup
        .string()
        .email('Deve ser um email válido')
        .required('Esse campo deve ser preenchido'),
    password: yup.string().required('Esse campo deve ser preenchido'),
})
