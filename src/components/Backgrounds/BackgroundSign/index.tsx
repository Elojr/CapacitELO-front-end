import React, { HtmlHTMLAttributes } from 'react'
import { Container } from './styles'

interface BackgroundSignProps extends HtmlHTMLAttributes<HTMLDivElement> {

}

function BackgroundSign({ children, ...props }: BackgroundSignProps) {
    return (
        <Container {...props}>
            <div className="balls first"></div>
            <div className="balls second"></div>
            <div className="balls third"></div>
            {children}
        </Container>
    )
}

export default BackgroundSign
