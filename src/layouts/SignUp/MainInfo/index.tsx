import React, { useState } from 'react'
import { Container } from './styles'
import { api } from '../../../services/api'
import { IFormData } from '..'
import { useRouter } from 'next/router'
import { useAuth } from '../../../hooks/AuthContext'
import { toast } from 'react-toastify'

interface IMainInfoProps {
    formData: IFormData
    setFormData(value: React.SetStateAction<IFormData>): void
    setIsEndingForm(value: React.SetStateAction<boolean>): void
}

const MainInfo: React.FC<IMainInfoProps> = ({
    formData,
    setFormData,
    setIsEndingForm,
}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (password !== confirmPassword) {
            toast.error('As senhas devem ser iguais')
            return
        }

        if (!name || !email || !password || !confirmPassword) {
            toast.error('Todos os dados são obrigatórios')
            return
        }

        setFormData({ ...formData, name, email, password })
        setIsEndingForm(true)
    }

    return (
        <Container>
            <form className="cad1" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome Completo"
                    onChange={e => {
                        setName(e.target.value)
                    }}
                    value={name}
                />
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
                    placeholder="Senha*"
                    minLength={8}
                    maxLength={24}
                    onChange={e => {
                        setPassword(e.target.value)
                    }}
                    value={password}
                />
                <input
                    type="password"
                    placeholder="Confirmar Senha"
                    minLength={8}
                    maxLength={24}
                    onChange={e => {
                        setConfirmPassword(e.target.value)
                    }}
                    value={confirmPassword}
                />
                <p className="warn">
                    *A senha deve conter de 8 a 24 caracteres
                </p>
                <button type="submit">Próximo</button>
            </form>
        </Container>
    )
}

export default MainInfo
