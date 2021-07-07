import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import MainInfo from './MainInfo'
import SecondaryInfo from './SecondaryInfo'
import { Container } from './styles'
import { parseCookies } from 'nookies'

export interface IFormData {
    name?: string
    email?: string
    password?: string
    course?: string
    phone?: string
    university?: string
}

const SignUp: React.FC = () => {
    const [formData, setFormData] = useState<IFormData>({} as IFormData)
    const [isEndingForm, setIsEndingForm] = useState(false)
    const router = useRouter()

    const cookies = parseCookies()
    const token = cookies['@exame:token']

    if (token) {
        router.push('/')
    }

    useEffect(() => console.log(formData), [formData])
    return (
        <Container>
            <main>
                <div className="logo">
                    <h2>Bem vindo ao</h2>
                    <h1>exame.</h1>
                </div>
                {!isEndingForm ? (
                    <MainInfo
                        formData={formData}
                        setFormData={setFormData}
                        setIsEndingForm={setIsEndingForm}
                    />
                ) : (
                    <SecondaryInfo
                        formData={formData}
                        setFormData={setFormData}
                        setIsEndingForm={setIsEndingForm}
                    />
                )}
                <p className="toLogin">
                    Já tem uma conta?&nbsp;
                    <Link href="/login">
                        <a>Faça o login!</a>
                    </Link>
                </p>
            </main>
        </Container>
    )
}

export default SignUp
