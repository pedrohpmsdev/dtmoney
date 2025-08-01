import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin-top: 1rem;
        font-family: "Bitcount Grid Single", system-ui;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        font-variation-settings:
        "slnt" 0,
        "CRSV" 0.5,
        "ELSH" 0,
        "ELXP" 0;

        //font-family: 'Poppins', sans-serif;
    }

    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
}
    body {
        background: linear-gradient(to top, #474745ff, #000000ed);
        color: #ffffff;
        background-attachment: fixed;
    }
`;