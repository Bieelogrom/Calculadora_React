import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: "IBM Plex Mono", monospace;
    }
`

export const MainWrapper = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FundoCalculadora = styled.div`
    width: 30%;
    height: 75%;
    background: #869798;
    border-radius: 24px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const TelaCalculadora = styled.div`
    width: 100%;
    height: 25%;
    background: #88FBF4;
    border-radius: 24px;
`

export const Teclado = styled.div`
    width: 100%;
    height: 75%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    justify-content: center;
`

export const Botão = styled.button`
    width: 30%;
    height: 16%;
    border: none;
    border-radius: 10px;
    background: #FBFFFE;
    cursor: pointer;
    font-size: 24px;
    font-weight: bold;

    &:focus{
        background: #0F0905;
        color: #FBFFFE;
    }

    ${props => props.igual && css`
        background: #15616D;
        color: #FBFFFE;

        &:hover{
            background: #001524;
        }
    `}
`

export const InputConta = styled.input`
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    font-size: 55px;
    text-align: end;
`
