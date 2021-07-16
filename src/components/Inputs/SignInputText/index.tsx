import React from 'react'
import { Container, Input, InputContainer, Error } from './styles'
import { UseFormRegister, UseFormRegisterReturn } from 'react-hook-form'

interface ISignInputTextProps extends React.HTMLAttributes<HTMLInputElement> {
    register: UseFormRegisterReturn
    error: string | undefined
    icon: React.ReactNode
}

function SignInputText({
    register,
    error,
    icon,
    ...rest
}: ISignInputTextProps) {
    return (
        <Container>
            <InputContainer>
                <Input {...register} {...rest} />
                {icon}
            </InputContainer>
            {error && <Error>{error}</Error>}
        </Container>
    )
}

export default SignInputText
