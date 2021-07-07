import React, { useState } from 'react'
import { Container } from './styles'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { useAuth } from '../../hooks/AuthContext'
import { parseCookies } from 'nookies'

const SignIn: React.FC = () => {
    const { signIn } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const cookies = parseCookies()
    const token = cookies['@exame:token']

    if (token) {
        router.push('/')
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        try {
            await signIn({ email, password })
            router.push('/')
        } catch (err: any) {
            toast.error(err.response.data.message)
        }
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

export const getServerSideProps = (ctx: any) => {
    console.log(ctx)
    return {
        props: {}, // will be passed to the page component as props
    }
}
