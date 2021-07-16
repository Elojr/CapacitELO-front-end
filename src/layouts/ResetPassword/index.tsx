import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ReactSVG } from 'react-svg'

import { Container } from './styles'

import SignInputText from '../../components/Inputs/SignInputText'
import LightGreenButton from '../../components/Buttons/LightGreenButton'

import { api, RESET_PASSWORD } from '../../services/api'

interface IFormValues {
    password: string
    confirmPassword: string
}

interface IResetPasswordProps {
    token: string
}

const ResetPassword: React.FC<IResetPasswordProps> = ({ token }) => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormValues>()

    const handleFormSubmit = React.useCallback<SubmitHandler<IFormValues>>(
        async data => {
            try {
                await api(
                    RESET_PASSWORD({
                        body: { token: token, password: data.password },
                    })
                )
                router.push('/login')
            } catch (err) {
                console.log(err)
            }
        },
        [router]
    )

    return (
        <Container>
            <div className="reset-logo">
                <img
                    src="/assets/images/logo/welcome-logo.svg"
                    alt="Bem vindo ao Exame"
                />
            </div>
            <form
                className="reset-form"
                id="reset-form"
                onSubmit={handleSubmit(handleFormSubmit)}
            >
                <SignInputText
                    register={register('password')}
                    error={errors.password?.message}
                    icon={<ReactSVG src="/assets/icons/sign/key.svg" />}
                    placeholder="Nova Senha"
                />
                <SignInputText
                    register={register('confirmPassword')}
                    error={errors.confirmPassword?.message}
                    icon={<ReactSVG src="/assets/icons/sign/key.svg" />}
                    placeholder="Confirmar Nova Senha"
                />
            </form>
            <div className="reset-submit">
                <LightGreenButton
                    className="submit-button"
                    type="submit"
                    form="reset-form"
                >
                    ATUALIZAR SENHA
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

export default ResetPassword
