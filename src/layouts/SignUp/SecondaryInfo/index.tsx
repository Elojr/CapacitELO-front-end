import React from 'react'

import { Container } from './styles';

const SecondaryInfo: React.FC = () => {
    return (
        <Container>
            <div className="cad2">
                <input type="tel" placeholder="Telefone*" />
                <input type="text" placeholder="Curso" />
                <p>*Não obrigatório</p>
                <button>CADASTRAR</button>
            </div>
        </Container>
    )
}

export default SecondaryInfo
