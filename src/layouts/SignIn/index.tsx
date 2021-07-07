import React from 'react'
import { Container } from './styles'
import Link from 'next/link'

const SignIn: React.FC = () => {
    return (
        <Container>
            <main>
                <div className="box-login">
                    <div className="logo">
                        <h2>Bem vindo ao</h2>
                        <h1>exame.</h1>
                    </div>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                    <p className="toRecover">
                        <Link href="/recuperarsenha"><a>Esqueceu a sua senha?</a></Link>
                    </p>
                    <button>Entrar</button>
                    <p className="toRegister">
                        Não tem uma conta?&nbsp;
                        <Link href="/cadastro"><a>Cadastre-se já!</a></Link>
                    </p>
                </div>
            </main>
        </Container>
    )
}

export default SignIn
