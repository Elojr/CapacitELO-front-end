import React from 'react'
import SignInLayout from '../layouts/SignIn'
import Head from 'next/head'

import BackgroundSign from '../components/BackgroundSign'

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
