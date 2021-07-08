import React from 'react'
import SubjectLayout from '../layouts/Subject'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

const Materia: React.FC = () => {
    return (
        <>
            <Head>
                <title>exame. - Materia x</title>
            </Head>

            <SubjectLayout />
        </>
    )
}

export default Materia

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

