import React from 'react'

const Cadastro1: React.FC = () => {
    return (
        <div className="cad1">
            <main>
                <div className="box-cad1">
                    <h1>Bem vindo ao</h1>
                    <input type="text" placeholder="Nome Completo" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha*" />
                    <input type="password" placeholder="Confirmar Senha" />
                    <button>Próximo</button>
                    <p>Já tem uma conta? <a href="./dois">Faça o login</a></p>
                </div>
            </main>
        </div>
    )
}

export default Cadastro1
