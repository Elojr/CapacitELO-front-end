import React from 'react'
import Head from 'next/head'

import RecoverPasswordLayout from '../layouts/RecoverPassword'
import BackgroundSign from '../components/BackgroundSign'

const Recuperar: React.FC = () => {
    return (
        <>
            <Head>
                <title>exame. - Recuperar Senha</title>
            </Head>
            <BackgroundSign>
                <RecoverPasswordLayout />
            </BackgroundSign>
        </>
    )
}

export default Recuperar
