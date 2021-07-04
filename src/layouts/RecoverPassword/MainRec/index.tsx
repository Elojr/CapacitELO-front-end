import React from 'react'
import Link from 'next/link'

import { Container } from './styles';

const SecondaryInfo: React.FC = () => {
    return (
        <Container>
            <div className="rec1">
                <p className="infotxt">
                    Insira o seu email e enviaremos um link
                    para você voltar a acessar a sua conta.
                </p>
                <input type="email" placeholder="Email"/>
                <button>Enviar link para recuperar senha</button>
                <p className="toLogin">
                    Não tem uma conta?&nbsp;
                    <Link href="/cadastro"><a>Cadastre-se já!</a></Link>
                </p>
            </div>
        </Container>
    )
}

export default SecondaryInfo
