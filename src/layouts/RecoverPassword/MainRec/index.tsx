import React, { useState } from 'react'
import Link from 'next/link'
import { Container } from './styles'
import { api } from '../../../services/api'

const MainRec: React.FC = () => {
    const [email, setEmail] = useState('')

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        try {
            e.preventDefault()
            if(!email) {
                return
            }
            const data = { email }
            await api({ url:"/password/forgot", data, method: "POST" })
        } catch (err) {
            console.log(err.response.data.message)
        }
    }
    return (
        <Container>
            <form className="rec1" onSubmit={handleSubmit}>
                <p className="infotxt">
                    Insira o seu email e enviaremos um link para você voltar a
                    acessar a sua conta
                </p>
                <input
                    type="email"
                    placeholder="Email"
                    onChange={e => {
                        setEmail(e.target.value)
                    }}
                    value={email}
                />
                <button type="submit">Enviar link para recuperar senha</button>
                <p className="toRegister">
                    Não tem uma conta?&nbsp;
                    <Link href="/cadastro">
                        <a>Cadastre-se já!</a>
                    </Link>
                </p>
            </form>
        </Container>
    )
}

export default MainRec
