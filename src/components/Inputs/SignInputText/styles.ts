import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
`
export const InputContainer = styled.div`
    position: relative;
    width: 100%;

    & > div {
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        z-index: 10;
        top: 0px;
        left: 0px;
        width: 63px;
        height: 67px;

        & > div {
            display: flex;
        }
    }
`
export const Input = styled.input`
    width: 100%;
    height: 67px;
    padding: 0px 15px 0px 55px;

    color: var(--color-black);
    font-size: 22px;
    font-family: 'Poppins', sans-serif;

    border: 4px solid var(--color-grey);
    border-radius: 5px;
    outline: none;
`
export const Error = styled.span`
    height: 20px;
    color: var(--color-red);
`
