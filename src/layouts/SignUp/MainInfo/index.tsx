import React from 'react'
import { Container } from './styles'
import { api } from '../../../services/api'

const MainInfo: React.FC = () => {
    return (
        <Container>
            <div className="cad1">
                <input type="text" placeholder="Nome Completo" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha*" />
                <input type="password" placeholder="Confirmar Senha" />
                <p className="warn">
                    *A senha deve conter de 8 a 24 caracteres
                </p>
                <button>Próximo</button>
            </div>
        </Container>
    )
}

export default MainInfo
