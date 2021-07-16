import * as yup from 'yup'

export const signUnMainInfoSchema = yup.object().shape({
    name: yup.string().required('O nome deve ser preenchido'),
    email: yup
        .string()
        .required('O email deve ser preenchido')
        .email('Deve ser um email'),
    password: yup.string().required('O nome deve ser preenchido'),
    confirmPassword: yup
        .string()
        .required('A senha deve ser preenchida')
        .oneOf([yup.ref('password'), null], 'As senhas devem combinar'),
})
export const signUpSecondaryInfoSchema = yup.object().shape({
    phone: yup
        .string()
        .matches(/^\(\d{2}\) \d{7,9}$/, 'Deve ser no formato (00) 00000000'),
    course: yup.string().required('O curso deve ser preenchido'),
})
