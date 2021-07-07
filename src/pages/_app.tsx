import React from 'react'
import type { AppProps } from 'next/app'

import GlobalStyle from '../styles/global'

import { AuthProvider } from '../hooks/AuthContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <AuthProvider>
            <Component {...pageProps} />
            <GlobalStyle />
        </AuthProvider>
    )
}
export default MyApp
