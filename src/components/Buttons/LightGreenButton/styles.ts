import styled from 'styled-components'

export const Container = styled.button`
    cursor: pointer;
    text-align: center;
    font-family: 'Lato' sans-serif;
    font-weight: 500;
    font-size: 22px;
    color: var(--color-white);

    width: 100%;
    height: 63px;
    border: none;
    background-color: var(--color-light-green);
    border-radius: 6px;

    transition: all 0.1s linear;

    &:hover {
        filter: brightness(95%);
    }
`
