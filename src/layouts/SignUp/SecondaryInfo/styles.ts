import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 100%;
    .cad2 {
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

        .warn {
            font-size: 13px;
            margin-top: -10px;
            margin-bottom: 20px;
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
        transform: translateX(0px) scale(1);
    }

    button:hover {
        background: #00b049;
        transform: translateX(0px) scale(1.05);
    }
`
