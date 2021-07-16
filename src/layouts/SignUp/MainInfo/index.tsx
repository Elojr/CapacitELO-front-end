import React from 'react'
import Link from 'next/link'
import { ReactSVG } from 'react-svg'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import SignInputText from '../../../components/Inputs/SignInputText'
import LightGreenButton from '../../../components/Buttons/LightGreenButton'

import { signUnMainInfoSchema } from '../../../validators/signUp'

import { IFullFormValues } from '../'

interface IFormValues {
    name: string
    email: string
    password: string
    confirmPassword: string
}

interface IMainInfoProps {
    canSubmit: boolean
    setCanSubmit: React.Dispatch<React.SetStateAction<boolean>>
    fullFormValues: IFullFormValues
    setFullFormValues: React.Dispatch<React.SetStateAction<IFullFormValues>>
}

const MainInfo: React.FC<IMainInfoProps> = ({
    setCanSubmit,
    fullFormValues,
    setFullFormValues,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormValues>({
        resolver: yupResolver(signUnMainInfoSchema),
    })
    const handleFormSubmit = React.useCallback<SubmitHandler<IFormValues>>(
        async data => {
            try {
                setFullFormValues(prev => ({ ...prev, ...data }))
                setCanSubmit(true)
            } catch (err) {
                console.log(err)
            }
        },
        [setFullFormValues, setCanSubmit]
    )
    return (
        <>
            <div className="register-logo">
                <img
                    src="/assets/images/logo/welcome-logo.svg"
                    alt="Bem vindo ao Exame"
                />
            </div>
            <form
                className="register-form"
                id="register-form"
                onSubmit={handleSubmit(handleFormSubmit)}
            >
                <SignInputText
                    defaultValue={fullFormValues.name || ''}
                    register={register('name')}
                    error={errors.name?.message}
                    icon={<ReactSVG src="/assets/icons/sign/profile.svg" />}
                    placeholder="Nome Completo"
                />
                <SignInputText
                    defaultValue={fullFormValues.email || ''}
                    register={register('email')}
                    error={errors.email?.message}
                    icon={<ReactSVG src="/assets/icons/sign/mail.svg" />}
                    placeholder="Email"
                />
                <SignInputText
                    defaultValue={fullFormValues.password || ''}
                    register={register('password')}
                    error={errors.password?.message}
                    icon={<ReactSVG src="/assets/icons/sign/key.svg" />}
                    placeholder="Senha"
                />
                <SignInputText
                    defaultValue={fullFormValues.confirmPassword || ''}
                    register={register('confirmPassword')}
                    error={errors.confirmPassword?.message}
                    icon={<ReactSVG src="/assets/icons/sign/key.svg" />}
                    placeholder="Confirmar Senha"
                />
            </form>
            <div className="register-submit">
                <LightGreenButton
                    className="submit-button"
                    type="submit"
                    form="register-form"
                >
                    PRÓXIMO
                </LightGreenButton>
                <p className="submit-register">
                    Já tem uma conta?{' '}
                    <Link href="/login">
                        <a>Faça o login</a>
                    </Link>
                </p>
            </div>
        </>
    )
}

export default MainInfo
