import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ReactSVG } from 'react-svg'

import { Container } from './styles'

import SignInputText from '../../components/Inputs/SignInputText'
import LightGreenButton from '../../components/Buttons/LightGreenButton'

import { useAuth } from '../../hooks/AuthContext'
import { signInSchema } from '../../validators/signIn'

interface IFormValues {
    email: string
    password: string
}

const SignIn: React.FC = () => {
    const router = useRouter()
    const { signIn } = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormValues>({
        resolver: yupResolver(signInSchema),
    })

    const handleFormSubmit = React.useCallback<SubmitHandler<IFormValues>>(
        async data => {
            try {
                await signIn(data)
                router.push('/')
            } catch (err) {
                console.log(err)
            }
        },
        [router, signIn]
    )

    return (
        <Container>
            <div className="login-logo">
                <img
                    src="/assets/images/logo/welcome-logo.svg"
                    alt="Bem vindo ao Exame"
                />
            </div>
            <form
                className="login-form"
                id="login-form"
                onSubmit={handleSubmit(handleFormSubmit)}
            >
                <SignInputText
                    register={register('email')}
                    error={errors.email?.message}
                    icon={<ReactSVG src="/assets/icons/sign/mail.svg" />}
                    placeholder="Email"
                />
                <SignInputText
                    register={register('password')}
                    error={errors.password?.message}
                    icon={<ReactSVG src="/assets/icons/sign/key.svg" />}
                    placeholder="Senha"
                />
            </form>
            <div className="login-submit">
                <Link href="/recuperarsenha">
                    <a className="submit-forgot">Esqueceu sua Senha?</a>
                </Link>
                <LightGreenButton
                    className="submit-button"
                    type="submit"
                    form="login-form"
                >
                    ENTRAR
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

export default SignIn
