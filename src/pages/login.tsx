import React from 'react'
import SignInLayout from '../layouts/SignIn'
import Head from 'next/head'
import { authRoutesHandler } from '../helpers/authRoutesHandler'

import BackgroundSign from '../components/Backgrounds/BackgroundSign'

const Login: React.FC = () => {
    return (
        <>
            <Head>
                <title>exame. - Login</title>
            </Head>
            <BackgroundSign>
                <SignInLayout />
            </BackgroundSign>
        </>
    )
}

export default Login

export const getServerSideProps = authRoutesHandler('public')
