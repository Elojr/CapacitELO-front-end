import React from 'react'
import Head from 'next/head'
import HomeLayout from '../layouts/Home'

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>exame.</title>
            </Head>

            <HomeLayout />
        </>
    )
}

export default Home
