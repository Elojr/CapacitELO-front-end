import React from 'react'
import Head from 'next/head'
import { GetServerSidePropsContext } from 'next'

import ResetPasswordLayout from '../layouts/ResetPassword'
import BackgroundSign from '../components/Backgrounds/BackgroundSign'

import { authRoutesHandler } from '../helpers/authRoutesHandler'

interface IRecuperarProps {
    token: string
}

const Recuperar: React.FC<IRecuperarProps> = ({ token }) => {
    return (
        <>
            <Head>
                <title>exame. - Recuperar Senha</title>
            </Head>
            <BackgroundSign>
                <ResetPasswordLayout token={token} />
            </BackgroundSign>
        </>
    )
}

export default Recuperar

export const getServerSideProps = authRoutesHandler(
    'public',
    async (ctx: GetServerSidePropsContext) => {
        const token = ctx.query.token
        return {
            props: {
                token: (token as string) || '',
            },
        }
    }
)
