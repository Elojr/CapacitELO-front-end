import * as yup from 'yup'

export const resetPasswordSchema = yup.object().shape({
    password: yup.string().required('O nome deve ser preenchido'),
    confirmPassword: yup
        .string()
        .required('A senha deve ser preenchida')
        .oneOf([yup.ref('password'), null], 'As senhas devem combinar'),
})
