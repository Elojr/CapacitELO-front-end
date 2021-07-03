import React from 'react'

import { Container } from './styles';

const SecondaryRec: React.FC = () => {
    return (
        <Container>
            <div className="rec2">
                <p>
                    Crie uma nova senha
                </p>
                <input type="password" placeholder="Nova Senha"/>
                <input type="password" placeholder="Confirmar Nova Senha"/>
                <button>Cadastrar nova senha</button>
            </div>
        </Container>
    )
}

export default SecondaryRec
