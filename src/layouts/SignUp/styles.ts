import styled from 'styled-components'

export const Container = styled.div`
    width: 619px;
    height: 781px;

    background: #FFFFFF;
    box-shadow: 0px 0px 16px -3px rgba(0, 0, 0, 0.25);
    border-radius: 7px;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;

    main {
        align-self: center;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        margin: auto 0;
    }

    .toLogin {
        align-self: center;
        font-size: 15px;
        color: #3E3D56;
        a{
            color: #3E3D56;
        }
    }

    .logo{
        margin-left: 25px;
        margin-bottom: 20px;
        h1 {
            font-family: Lato;
            font-style: normal;
            font-weight: 800;
            font-size: 70px;
            line-height: 40px;
            letter-spacing: -0.05em;
            cursor: default;
            align-self: center;
            color: #00b049;
            margin-bottom: 40px;
            margin-left: 40px;
            user-select: none;
        }

        h2 {
            color: #3E3D56;
            cursor: default;
            font-size: 30px;
            margin-bottom: -10px;
            margin-right: 45px;
            user-select: none;
        }
    }

`;
