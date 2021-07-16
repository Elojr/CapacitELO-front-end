import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: calc(var(--size-grid-width) + 2 * var(--size-padding-mobile));
    margin: 0 auto;
    padding: 0px var(--size-padding-mobile);

    .materias-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 40px 40px 20px 40px;

        .title {
            h1 {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 600;
                font-size: 48px;
                color: var(--color-black);
                line-height: 70px;
            }
            h2 {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                color: var(--color-black);
            }
        }
    }

    .materias-content {
        width: 100%;
        height: 100%;
        padding: 64px 0px;

        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
        background-color: var(--color-white);
        border-radius: 35px;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        .content-card {
            cursor: pointer;
            flex: 0 0 220px;
            height: 273px;
            margin: 30px 25px;
            border: none;
            border-radius: 17px;
            background-color: #3c8158;
            h3 {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 36px;
                text-align: center;
                color: var(--color-white);
            }
        }
    }
`
