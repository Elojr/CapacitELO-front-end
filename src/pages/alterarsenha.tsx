import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import type { AppProps } from 'next/app'

import ResetPasswordLayout from '../layouts/ResetPassword'
import BackgroundSign from '../components/BackgroundSign'

const Alterar: React.FC<AppProps> = ({ token }) => {
    return (
        <>
            <Head>
                <title>exame. - Alterar Senha</title>
            </Head>
            <BackgroundSign>
                <ResetPasswordLayout token={token as string | undefined} />
            </BackgroundSign>
        </>
    )
}

export default Alterar

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const token = ctx.query['token']
    return {
        props: {
            token: token
        },
    }
}
