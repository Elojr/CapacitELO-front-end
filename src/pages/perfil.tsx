import React from 'react'
import Head from 'next/head'
import ProfileLayout from '../layouts/Profile'
import BackgroundPrivate from '../components/BackgroundPrivate'
import { authRoutesHandler } from '../helpers/authRoutesHandler'

const Perfil: React.FC = () => {
    return (
        <>
            <Head>
                <title>exame.Home</title>
            </Head>
            <BackgroundPrivate>
                <ProfileLayout />
            </BackgroundPrivate>
        </>
    )
}

export default Perfil

export const getServerSideProps = authRoutesHandler('private')
