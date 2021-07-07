import React from 'react'
import { Container } from './styles'

const Profile: React.FC = () => {
    return (
        <Container>
            <main>
                <div className="left-side">
                    <img
                        className="avatar"
                        src="https://avatars.githubusercontent.com/u/73246374?s=400&u=0f121f0b7cf4e6efbcd19b2fb68d94ff635069d9&v=4"
                    ></img>
                    <button className="provas">Minhas Provas</button>
                    <button className="deletar">Deletar Conta</button>
                </div>
                <div className="right-side">
                    <p className="nome">Nome</p>
                    <div className="box">
                        <p>Email:</p>
                        <p>XXXXXXXXXX</p>
                    </div>
                    <div className="box">
                        <p>Curso:</p>
                        <p>XXXXXXXXXX</p>
                    </div>
                    <div className="box">
                        <p>Telefone:</p>
                        <p>XXXXXXXXXX</p>
                    </div>
                </div>
            </main>
        </Container>
    )
}

export default Profile
