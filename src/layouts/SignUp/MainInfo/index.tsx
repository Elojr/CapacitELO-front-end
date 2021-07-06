import React from 'react'
import { Container } from './styles';
import { AiOutlineUser } from 'react-icons/ai';

const MainInfo: React.FC = () => {

    return (
        <Container>
            <div className="cad1">
                <label>
                    {/* <AiOutlineUser className="iconUser"/> */}
                    <input type="text" placeholder="Nome Completo" />
                </label>

                <label>
                    <input type="email" placeholder="Email" />
                </label>

                <label>
                    <input type="password" placeholder="Senha*" />
                </label>

                <label>
                    <input type="password" placeholder="Confirmar Senha" />
                </label>

                <p className="warn">*A senha deve conter de 6 a 24 caracteres</p>
                <button>Próximo</button>
            </div>
        </Container>
    )
}

export default MainInfo
