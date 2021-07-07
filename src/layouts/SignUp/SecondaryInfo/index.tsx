import React, { useState } from 'react'
import { Container } from './styles'
import { api } from '../../../services/api'
import { IFormData } from '..'
import { useRouter } from 'next/router'
import { useAuth } from '../../../hooks/AuthContext'

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

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {}

    return (
        <Container>
            <div className="cad2">
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
                <button>Cadastrar</button>
            </div>
        </Container>
    )
}

export default SecondaryInfo
