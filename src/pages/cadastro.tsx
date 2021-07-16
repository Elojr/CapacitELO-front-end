import React from 'react'
import Head from 'next/head'

import SignUpLayout from '../layouts/SignUp'
import BackgroundSign from '../components/BackgroundSign'

import { authRoutesHandler } from '../helpers/authRoutesHandler'

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

export const getServerSideProps = authRoutesHandler('public')
