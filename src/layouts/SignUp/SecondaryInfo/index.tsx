import React, { useState } from 'react'
import { Container } from './styles'
import { api } from '../../../services/api'
import { IFormData } from '..'
import router, { useRouter } from 'next/router'
import { toast } from 'react-toastify'

interface ISecondaryInfoProps {
    formData: IFormData
    setFormData(value: React.SetStateAction<IFormData>): void
    setIsEndingForm(value: React.SetStateAction<boolean>): void
}

const SecondaryInfo: React.FC<ISecondaryInfoProps> = ({
    formData,
    setFormData,
    setIsEndingForm,
}) => {
    const [phone, setPhone] = useState('')
    const [course, setCourse] = useState('')

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const data={ ...formData, phone, course, university:"UFG" }
        setFormData(data)
        setIsEndingForm(true)
        await api({ url:"/users", data, method: "POST" })
        router.push('/login')
        toast.success('Cadastro realizado com sucesso! Faça o login para continuar.')
    }

    return (
        <Container>
            <form className="cad2" onSubmit={handleSubmit}>
                <input
                    type="tel"
                    placeholder="Telefone*"
                    onChange={e => {
                        setPhone(e.target.value)
                    }}
                    value={phone}
                />
                <input
                    type="text"
                    placeholder="Curso"
                    onChange={e => {
                        setCourse(e.target.value)
                    }}
                    value={course}
                />
                <p className="warn">*Não obrigatório</p>
                <button type="submit">Cadastrar</button>
            </form>
        </Container>
    )
}

export default SecondaryInfo
