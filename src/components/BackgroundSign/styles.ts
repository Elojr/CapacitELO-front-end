import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    background-color: #f3f5f9;

    .balls {
        position: fixed;
        z-index: 0;

        width: 326px;
        height: 326px;

        background-color: transparent;
        border: 5px dashed #c5c5c5;
        border-radius: 50%;

        &.first {
            top: -12%;
            right: -4%;
        }

        &.second {
            top: 30%;
            left: -4%;
        }

        &.third {
            top: 83%;
            left: 73%;
        }
    }
`
