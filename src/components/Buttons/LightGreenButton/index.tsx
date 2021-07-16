import React from 'react'
import { Container } from './styles'

function LightGreenButton({
    children,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return <Container {...props}>{children}</Container>
}

export default LightGreenButton
