import styled from 'styled-components'

export const Container = styled.div`
    max-width: 620px;
    width: 100%;
    padding: 100px 80px;
    margin: 0px var(--size-padding-mobile);

    border-radius: 7px;
    background-color: var(--color-white);
    box-shadow: 0px 0px 16px -3px rgba(0, 0, 0, 0.25);

    position: relative;
    z-index: 5px;

    .register-logo {
        max-width: 340px;
        width: 100%;
        margin: 0 auto;
        img {
            width: 100%;
        }
    }

    .register-form {
        margin-top: 65px;
        & > div + div {
            margin-top: 20px;
        }
    }

    .register-submit {
        margin-top: 10px;
        .submit-forgot {
            display: block;
            max-width: 190px;
            width: 100%;
            margin: 0px 4px 0px auto;

            text-align: right;
            text-decoration: none;
            font-family: 'Poppins' sans-serif;
            font-size: 18px;
            color: var(--color-black);

            &:hover {
                text-decoration: underline;
            }
        }

        .submit-button {
            margin-top: 40px;
        }

        .submit-register {
            width: 100%;
            margin-top: 22px;
            display: block;

            text-align: center;
            text-decoration: none;
            font-family: 'Poppins';
            font-size: 16px;
            color: var(--color-black);

            a {
                text-decoration: underline;
                font-family: inherit;
                font-size: inherit;
                color: inherit;
            }
        }
    }

    .register-arrow {
        cursor: pointer;
        width: 60px;
        padding: 10px;
    }

    @media (max-width: 510px) {
        padding: 100px 20px;
    }
`
