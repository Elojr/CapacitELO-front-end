import React from 'react'

import { Container } from './styles';

const SecondaryRec: React.FC = () => {
    return (
        <Container>
            <div className="cad2">
                <input type="tel" placeholder="Telefone*"/>
                <input type="text" placeholder="Curso"/>
                <p className="warn">*Não obrigatório</p>
                <button>Cadastrar</button>
            </div>
        </Container>
    )
}

export default SecondaryRec
