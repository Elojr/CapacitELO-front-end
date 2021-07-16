import React from 'react'
import Head from 'next/head'
import HomeLayout from '../layouts/Home'
import BackgroundPrivate from '../components/BackgroundPrivate'
import { authRoutesHandler } from '../helpers/authRoutesHandler'

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>exame.Home</title>
            </Head>
            <BackgroundPrivate>
                <HomeLayout />
            </BackgroundPrivate>
        </>
    )
}

export default Home

export const getServerSideProps = authRoutesHandler('private')
