import React from 'react'

import MainRec from './MainRec';
import { Container } from './styles';

export interface IFormData {
    email?: string
}

const Recuperar: React.FC = () => {
    return (
        <Container>
            <main>
                <div className="logo">
                    <h2>Bem vindo ao</h2>
                    <h1>exame.</h1>
                </div>
                <MainRec />
            </main>
        </Container>
    )
}

export default Recuperar
