import React, { useState } from 'react'
import { Container } from './styles';
import { api } from '../../../services/api'
import router, { useRouter } from 'next/router'

interface ISecondaryRec {
    token: string | undefined;
}

const SecondaryRec: React.FC<ISecondaryRec> = ({ token }) => {

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        try {
            e.preventDefault()

            if (password !== confirmPassword) {
                return
            }
            const data = { token, password }
            await api({ url:"/password/reset", data, method: "POST" })
        } catch (err) {
            console.log(err.response.data.message)
        }
        router.push('/login')
    }
    return (
        <Container>
            <form className="rec2" onSubmit={handleSubmit}>
                <p>
                    Crie uma nova senha
                </p>
                <input
                    type="password"
                    /* minLength={8}
                    maxLength={24} */
                    placeholder="Nova Senha"
                    onChange={e => {
                        setPassword(e.target.value)
                    }}
                    value={password}
                />
                <input
                    type="password"
                    placeholder="Confirmar Nova Senha"
                    onChange={e => {
                        setConfirmPassword(e.target.value)
                    }}
                    value={confirmPassword}
                />
                <button type="submit">Cadastrar nova senha</button>
            </form>
        </Container>
    )
}

export default SecondaryRec
