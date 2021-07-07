import React, { useState } from 'react'
import { Container } from './styles'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useAuth } from '../../hooks/AuthContext'

const SignIn: React.FC = () => {
    const { signIn } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        try {
            await signIn({ email, password })
            router.push('/')
        } catch (err) {}
    }

    return (
        <Container>
            <main>
                <form className="login" onSubmit={handleSubmit}>
                    <div className="logo">
                        <h2>Bem vindo ao</h2>
                        <h1>exame.</h1>
                    </div>

                    <input
                        type="email"
                        placeholder="Email"
                        onChange={e => {
                            setEmail(e.target.value)
                        }}
                        value={email}
                    />

                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={e => {
                            setPassword(e.target.value)
                        }}
                        value={password}
                    />

                    <p className="toRecover">
                        <Link href="/recuperarsenha">
                            <a>Esqueceu a sua senha?</a>
                        </Link>
                    </p>

                    <button type="submit">Entrar</button>

                    <p className="toRegister">
                        Não tem uma conta?&nbsp;
                        <Link href="/cadastro">
                            <a>Cadastre-se já!</a>
                        </Link>
                    </p>
                </form>
            </main>
        </Container>
    )
}

export default SignIn
