import React from 'react'

import { Container } from './styles';

const SecondaryInfo: React.FC = () => {
    return (
        <Container>
            <main>
                <div className="box-cad2">
                    <h1>Bem vindo ao</h1>
                    <input className="phone" type="tel" placeholder="Telefone*" />
                    <input className="curso" type="text" placeholder="Curso" />
                    <p>*Não obrigatório</p>
                    <button>CADASTRAR</button>
                    <p>Já tem uma conta? <a href="../login">Faça login</a></p>
                </div>
            </main>
        </Container>
    )
}

export default SecondaryInfo
