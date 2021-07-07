import styled from 'styled-components'

export const Container = styled.div`
    width: 1200px;
    height: 725px;
    background: #ffffff;
    box-shadow: 0px 0px 16px -3px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    display: flex;
    align-items: center;
    align-self: center;
    margin: auto;
    margin-top: 200px;

    main {
        align-self: center;
        align-items: center;
        display: flex;
        flex-direction: row;
        margin: auto auto;
        justify-content: space-between;
    }

    .left-side {
        align-self: left;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-right: 100px;
    }
    .avatar {
        width: 370px;
        height: 370px;
        border-radius: 50%;
        margin-bottom: 30px;
    }
    .provas {
        background-color: #f3f5f9;
        color: #3e3d56;
        box-shadow: 0px 0px 16px -3px rgba(0, 0, 0, 0.25);
        border-radius: 7px;
        width: 300px;
        height: 85px;
        border: #f3f5f9;
        margin-bottom: 25px;
        font-size: 30px;
        font-weight: bold;
    }
    .deletar {
        width: 180px;
        height: 50px;
        background-color: #e44242;
        border: #e44242;
        color: #ffffff;
        border-radius: 7px;
        box-shadow: 0px 0px 16px -3px rgba(0, 0, 0, 0.25);
        font-size: 18px;
        font-weight: bold;
    }
    .right-side {
        align-self: right;
        display: flex;
        flex-direction: column;
        align-items: left;
    }

    .nome {
        font-size: 64px;
    }

    .box {
        width: 550px;
        height: 120px;
        font-size: 30px;
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;
        box-shadow: 0px 0px 16px -3px rgba(0, 0, 0, 0.15);
        margin: 15px 0 15px 0;
        border-radius: 7px;
        padding: 10px;
    }
`
