import React from 'react'
import { Container } from './styles'

const SignIn: React.FC = () => {
    return (
        <Container>
            <main>
                <div className="box-login">
                    <h2>Bem vindo ao</h2>
                    <h1>exame.</h1>
                    <input type="text" placeholder="Nome" />
                    <input type="text" placeholder="Senha" />
                    <p>Esqueceu sua senha?</p>
                    <button>Entrar</button>
                    <p> Nao tem uma conta? Cadastre-se ja.</p>
                </div>
            </main>
        </Container>
    )
}

export default SignIn
