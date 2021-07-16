import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactSVG } from 'react-svg'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import SignInputText from '../../../components/Inputs/SignInputText'

import { api, CREATE_USER } from '../../../services/api'
import LightGreenButton from '../../../components/Buttons/LightGreenButton'

import { IFullFormValues } from '../'

import { signUpSecondaryInfoSchema } from '../../../validators/signUp'
interface IFormValues {
    phone: string
    course: string
}
interface ISecondaryInfoProps {
    canSubmit: boolean
    setCanSubmit: React.Dispatch<React.SetStateAction<boolean>>
    fullFormValues: IFullFormValues
    setFullFormValues: React.Dispatch<React.SetStateAction<IFullFormValues>>
}

const SecondaryInfo: React.FC<ISecondaryInfoProps> = ({
    setCanSubmit,
    fullFormValues,
    setFullFormValues,
}) => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormValues>({
        resolver: yupResolver(signUpSecondaryInfoSchema),
    })
    const handleFormSubmit = React.useCallback<SubmitHandler<IFormValues>>(
        async data => {
            try {
                const body = {
                    name: fullFormValues.name || '',
                    email: fullFormValues.email || '',
                    password: fullFormValues.password || '',
                    course: data.course,
                    phone: data.phone,
                    university: 'UFG',
                }
                await api(CREATE_USER({ body }))
                setFullFormValues(prev => ({ ...prev, ...data }))
                router.push('/login')
            } catch (err) {
                console.log(err)
            }
        },
        [fullFormValues, setFullFormValues, setCanSubmit]
    )
    const handleBackClick = React.useCallback(() => {
        setCanSubmit(false)
    }, [setCanSubmit])
    return (
        <>
            <ReactSVG
                src="/assets/icons/sign/arrow.svg"
                className="register-arrow"
                onClick={handleBackClick}
            />
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
                    defaultValue={fullFormValues.phone || ''}
                    register={register('phone')}
                    error={errors.phone?.message}
                    icon={<ReactSVG src="/assets/icons/sign/phone.svg" />}
                    placeholder="Telefone*"
                />
                <SignInputText
                    defaultValue={fullFormValues.course || ''}
                    register={register('course')}
                    error={errors.course?.message}
                    icon={<ReactSVG src="/assets/icons/sign/hat.svg" />}
                    placeholder="Curso"
                />
            </form>
            <div className="register-submit">
                <LightGreenButton
                    className="submit-button"
                    type="submit"
                    form="register-form"
                >
                    CRIAR
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

export default SecondaryInfo
