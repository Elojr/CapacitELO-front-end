import React from 'react'
import Head from 'next/head'
import ProfileLayout from '../layouts/Profile'

const Perfil: React.FC = () => {
    return (
        <>
            <Head>
                <title>exame.Home</title>
            </Head>
            <ProfileLayout></ProfileLayout>
        </>
    )
}

export default Perfil
