import React from 'react'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import HomeLayout from '../layouts/Home'

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>exame.Home</title>
            </Head>
            <NavBar></NavBar>
            <HomeLayout></HomeLayout>
        </>
    )
}

export default Home
