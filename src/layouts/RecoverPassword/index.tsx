import React from 'react'

import MainRec from './MainRec';
import SecondaryRec from './SecondaryRec';
import { Container } from './styles';

const Recuperar: React.FC = () => {
    return (
        <Container>
            <main>
                <div className="logo">
                    <h2>Bem vindo ao</h2>
                    <h1>exame.</h1>
                </div>
                <SecondaryRec />
            </main>
        </Container>
    )
}

export default Recuperar
