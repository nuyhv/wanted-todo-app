import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        background-color: #444d65;
        display: flex;
        justify-content: center;
        color: white;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }

    h1 {
        font-size: 2rem;
        font-weight: 600;
    }
    `;
export default GlobalStyle;
