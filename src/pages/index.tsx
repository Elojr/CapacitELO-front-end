import React from 'react'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import HomeLayout from '../layouts/Home'
import { authRoutesHandler } from '../helpers/authRoutesHandler'

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>exame.Home</title>
            </Head>
            <NavBar></NavBar>
            <HomeLayout />
        </>
    )
}

export default Home

export const getServerSideProps = authRoutesHandler('private')
