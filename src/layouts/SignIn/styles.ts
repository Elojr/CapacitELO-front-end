import styled from 'styled-components'

export const Container = styled.div`
    width: 619px;
    height: 100vh;
    background: #ffffff;
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
        font-family: 'Poppins', sans-serif;
    }

    .login {
        .logo {
            text-align: center;
            margin-bottom: 60px;
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
                color: #3e3d56;
                cursor: default;
                font-size: 30px;
                margin-bottom: -10px;
                margin-right: 45px;
                user-select: none;
            }
        }

        input {
            background: #ffffff;
            border: 2px solid #c5c5c5;
            border-radius: 4px;
            display: block;
            outline: none;
            font-size: 19px;
            margin-bottom: 15px;
            padding: 10px;
            width: 300px;
            height: 40px;
        }

        .toRecover {
            margin-top: -10px;
            margin-left: 144px;
            margin-bottom: 20px;
            font-size: 13px;
            color: #3e3d56;
            a {
                color: #3e3d56;
            }
        }

        button {
            width: 300px;
            height: 40px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-family: Lato;
            font-size: 17px;
            color: #ffffff;
            background-color: #00b049;
            padding: 5px;
            margin: 10px 0;
            transition: transform 1s;
            transform: translateX(0) scale(1);
        }

        button:hover {
            background: #00b049;
            transform: translateX(0px) scale(1.1);
        }

        button:hover:after {
            transform: translateX(0px) scale(1);
        }

        .toRegister {
            text-align: center;
            font-size: 15px;
            color: #3e3d56;
            a {
                color: #3e3d56;
            }
        }
    }
`
