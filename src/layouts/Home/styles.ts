import styled from 'styled-components'

export const Container = styled.div`
    flex-direction: column;
    width: 100%;
    main {
        font-family: 'Poppins', sans-serif;
        align-self: center;
        flex-direction: column;
        margin: auto 0;

        .home {
            display: flex;
            flex-direction: column;

            .titles {
                margin-left: 150px;
                margin-bottom: -45px;
                color: #3e3d56;
                h1 {
                    margin-top: 30px;
                    font-size: 48px;
                }
                h2 {
                    margin-top: -15px;
                    font-size: 24px;
                }
            }
            select {
                width: 168px;
                height: 46px;
                background-color: #ffffff;
                align-self: flex-end;
                margin-right: 150px;
                margin-bottom: 20px;
                border: none;
                padding: 5px;
                box-shadow: 0px 0px 16px -3px rgba(0, 0, 0, 0.25);
                border-radius: 12px;
            }

            .container-cards {
                background-color: #ffffff;
                border-radius: 30px;
                box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
                align-self: center;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-items: center;
                justify-content: flex-start;
                min-width: 90%;
                padding: 10px;

                .card {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: none;
                    background-color: #3c8158;
                    color: #ffffff;
                    cursor: pointer;
                    height: 200px;
                    width: 150px;
                    margin: 20px 10px;
                    transition: 0.5s;
                    transform: translateX(0px) scale(1);
                    border-radius: 17px;
                    text-decoration: none;
                    text-align: center;
                    word-break: break-word;
                }

                .card:hover {
                    background: #00b049;
                    transform: translateX(0px) scale(1.1);
                }
            }
        }
    }
`
