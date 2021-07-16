import React from 'react'

import { Container } from './styles'

import MainInfo from './MainInfo'
import SecondaryInfo from './SecondaryInfo'

import { useAuth } from '../../hooks/AuthContext'

export interface IFullFormValues {
    name?: string
    email?: string
    password?: string
    confirmPassword?: string
    phone?: string
    course?: string
}

const SignUp: React.FC = () => {
    const [canSubmit, setCanSubmit] = React.useState(false)
    const [fullFormValues, setFullFormValues] = React.useState<IFullFormValues>(
        {}
    )

    return (
        <Container>
            {!canSubmit ? (
                <MainInfo
                    canSubmit={canSubmit}
                    setCanSubmit={setCanSubmit}
                    fullFormValues={fullFormValues}
                    setFullFormValues={setFullFormValues}
                />
            ) : (
                <SecondaryInfo
                    canSubmit={canSubmit}
                    setCanSubmit={setCanSubmit}
                    fullFormValues={fullFormValues}
                    setFullFormValues={setFullFormValues}
                />
            )}
        </Container>
    )
}

export default SignUp
