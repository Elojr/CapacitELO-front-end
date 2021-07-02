import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    position: relative;
    background-color: #F3F5F9;

    .balls {
        position: fixed;

        width: 326px;
        height: 326px;

        background-color: transparent;
        border: 5px dashed #C5C5C5;
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
    
`;