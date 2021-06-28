import React from 'react'

const Cadastro2: React.FC = () => {
    return (
        <div className="cad2">
            <main>
                <div className="box-cad2">
                    <h1>Bem vindo ao</h1>
                    <input type="tel" placeholder="Telefone" />
                    <input type="text" placeholder="Curso" />
                    <button>CADASTRAR</button>
                    <p>Já tem uma conta? <a href="./dois">Faça o login</a></p>
                </div>
            </main>
        </div>
    )
}

export default Cadastro2
