import React from 'react'

const Login: React.FC = () => {
    return (
        <div className="login">
            <main>
                <div className="box-login">
                    <h1>Bem vindo ao</h1>
                    <input type="text" placeholder="Nome" />
                    <input type="text" placeholder="Senha" />
                    <p>Esqueceu sua senha?</p>
                    <button>Entrar</button>
                    <p> Nao tem uma conta? Cadastre-se ja.</p>
                </div>
            </main>
        </div>
    )
}

export default Login
