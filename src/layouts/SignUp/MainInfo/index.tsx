import React from 'react'
import Link from 'next/link'

const MainInfo: React.FC = () => {

    return (
        <div className="cad1">
            <main>
                <div className="box-cad1">
                    <h1>Bem vindo ao</h1>
                    <input type="text" placeholder="Nome Completo" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha*" />
                    <input type="password" placeholder="Confirmar Senha" />
                    <button >Próximo</button>
                    <p>Já tem uma conta? <Link href="/"><a>Faça o login</a></Link></p>
                </div>
            </main>
        </div>
    )
}

export default MainInfo
