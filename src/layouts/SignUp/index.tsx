import React from 'react'

import { Container } from './styles';

const SecondaryInfo: React.FC = () => {
    return (
        <Container>
            <main>
                <div className="box-cad2">
                    <h1>Bem vindo ao</h1>
                    <input type="tel" placeholder="Telefone" />
                    <input type="text" placeholder="Curso" />
                    <button>CADASTRAR</button>
                    <p>Já tem uma conta? <a href="./dois">Faça o login</a></p>
                </div>
            </main>
        </Container>
    )
}

export default SecondaryInfo
