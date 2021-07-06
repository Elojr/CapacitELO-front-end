import React from 'react'
import Head from 'next/head'

import SignUpLayout from '../layouts/SignUp'
import BackgroundSign from '../components/BackgroundSign'

const Cadastro: React.FC = () => {
    return (
        <>
            <Head>
                <title>exame. - Cadastro</title>
            </Head>
            <BackgroundSign>
                <SignUpLayout />
            </BackgroundSign>
        </>
    )
}

export default Cadastro
