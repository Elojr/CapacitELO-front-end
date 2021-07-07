import React from 'react'
import Link from 'next/link'

import MainInfo from './MainInfo'
import SecondaryInfo from './SecondaryInfo'
import { Container } from './styles'

const SignUp: React.FC = () => {
    return (
        <Container>
            <main>
                <div className="logo">
                    <h2>Bem vindo ao</h2>
                    <h1>exame.</h1>
                </div>
                <MainInfo />
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
