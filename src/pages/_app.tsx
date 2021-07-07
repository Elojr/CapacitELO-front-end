import React from 'react'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import GlobalStyle from '../styles/global'
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from '../hooks/AuthContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <AuthProvider>
            <Component {...pageProps} />
            <GlobalStyle />
            <ToastContainer autoClose={3000} />
        </AuthProvider>
    )
}
export default MyApp

export const getServerSideProps = (ctx: any) => {
    console.log(ctx)
    return {
        props: {}, // will be passed to the page component as props
    }
}
