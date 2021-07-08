import React from 'react'
import Head from 'next/head'
import HomeLayout from '../layouts/Home'
import { parseCookies } from 'nookies'
import { GetServerSideProps } from 'next'
import { api } from '../services/api'

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { '@exame:token': token } = parseCookies(ctx)
    if (!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            },
        }
    }
    return {
        props: {}
    }
}
