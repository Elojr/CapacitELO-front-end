import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ReactSVG } from 'react-svg'

import { Container } from './styles'

import SignInputText from '../../components/Inputs/SignInputText'
import LightGreenButton from '../../components/Buttons/LightGreenButton'

import { api, SEND_EMAIL_FORGOT_PASSWORD } from '../../services/api'

import { recoverPasswordSchema } from '../../validators/recoverPassword'

interface IFormValues {
    email: string
}

const RecoverPassword: React.FC = () => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormValues>({
        resolver: yupResolver(recoverPasswordSchema),
    })

    const handleFormSubmit = React.useCallback<SubmitHandler<IFormValues>>(
        async data => {
            try {
                await api(SEND_EMAIL_FORGOT_PASSWORD({ body: data }))
                router.push('/login')
            } catch (err) {
                console.log(err)
            }
        },
        [router]
    )

    return (
        <Container>
            <div className="recover-logo">
                <img
                    src="/assets/images/logo/welcome-logo.svg"
                    alt="Bem vindo ao Exame"
                />
            </div>
            <form
                className="recover-form"
                id="recover-form"
                onSubmit={handleSubmit(handleFormSubmit)}
            >
                <p className="form-message">
                    Insira o seu email e enviaremos um link para você voltar a
                    acessar a sua conta.
                </p>
                <SignInputText
                    register={register('email')}
                    error={errors.email?.message}
                    icon={<ReactSVG src="/assets/icons/sign/mail.svg" />}
                    placeholder="Email"
                />
            </form>
            <div className="recover-submit">
                <LightGreenButton
                    className="submit-button"
                    type="submit"
                    form="recover-form"
                >
                    Enviar Link de Mudança de Senha
                </LightGreenButton>
                <p className="submit-register">
                    Não tem uma conta?{' '}
                    <Link href="/cadastro">
                        <a>Cadastre-se já</a>
                    </Link>
                </p>
            </div>
        </Container>
    )
}

export default RecoverPassword
