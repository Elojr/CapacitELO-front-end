import styled from 'styled-components'

export const Container = styled.div`
    width: 619px;
    height: 100vh;

    background: #FFFFFF;
    box-shadow: 0px 0px 16px -3px rgba(0, 0, 0, 0.25);
    border-radius: 7px;

    display: flex;
    align-items: flex-start;
    flex-direction: column;

    main {
        align-self: center;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        margin: auto 0;
    }

    .toLogin {
        align-self: center;
    }

    h1 {
        font-family: Lato;
        font-style: normal;
        font-weight: 800;
        font-size: 60px;
        line-height: 40px;
        letter-spacing: -0.05em;
        cursor: default;
        align-self: center;
        color: #00B049;
        margin-bottom: 40px;
        user-select: none;
    }

    h2 {
        cursor: default;
        font-size: 28px;
        margin-bottom: -10px;
        user-select: none;
    }
`;
