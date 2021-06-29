import React from 'react'

const Cadastro2: React.FC = () => {
    return (
        <div className="cad2">
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
        </div>
    )
}

export default Cadastro2
