import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root {
        --color-white: #FFFFFF;
        --color-black: #3E3D56;
        --color-grey: #C5C5C5;
        --color-light-green: #00B049;
        --color-red: #E44242;
        --size-padding-mobile: 20px;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: #F3F5F9;
        color: #121214;
        font: 400 16px Roboto, sans-serif;
    }
    img {
        display: block;
    }
`
