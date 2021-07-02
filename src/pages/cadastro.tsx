import React from 'react';
import SignUpLayout from '../layouts/SignUp';
import Head from 'next/head';

import BackgroundSign from '../components/BackgroundSign';

const Cadastro: React.FC = () => {
    return (
        <>
            <Head>
                <title>Entrar</title>
            </Head>
            <BackgroundSign>
                <SignUpLayout />
            </BackgroundSign>
        </>
    )
}

export default Cadastro
