import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 100%;
    .rec1{

        .infotxt{
            text-align: center;
            margin-bottom: 20px;
            width: 18em; word-wrap: break-word;
        }

        input{
            background: #FFFFFF;
            border: 2px solid #C5C5C5;
            border-radius: 5px;
            display: block;
            outline: none;
            font-size: 19px;
            margin-bottom: 6px;
            padding: 5px;
            align-self: center;
            width: 100%
        }

        button {
            align-self: center;
            width: 100%;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-family: Lato;
            font-size: 17px;
            color: #ffffff;
            background-color: #00B049;
            padding: 5px;
            margin: 10px 0;
        }

        .toLogin {
            text-align: center;
        }
    }


`;


