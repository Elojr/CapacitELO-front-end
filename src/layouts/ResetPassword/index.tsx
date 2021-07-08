import React from 'react'

import SecondaryRec from './SecondaryRec';
import { Container } from './styles';

interface IReacuperarProps {
    token: string | undefined;
}

const Recuperar: React.FC<IReacuperarProps> = ({ token }) => {
    return (
        <Container>
            <main>
                <div className="logo">
                    <h2>Bem vindo ao</h2>
                    <h1>exame.</h1>
                </div>
                <SecondaryRec token={token} />
            </main>
        </Container>
    )
}

export default Recuperar
