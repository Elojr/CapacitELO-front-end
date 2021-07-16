import * as yup from 'yup'

export const recoverPasswordSchema = yup.object().shape({
    email: yup
        .string()
        .email('Deve ser um email válido')
        .required('Esse campo deve ser preenchido'),
})
