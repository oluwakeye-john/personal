import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    body{
        padding: 0;
        margin: 0 auto;
        color: ${({ theme }) => theme.textNormal};
        background-color: ${({ theme }) => theme.bg}; 
        transition: 0.3s;
        font-family: Segoe UI, Helvetica Neue, Helvetica, Lucida Grande, Arial, Ubuntu,
        Cantarell, Fira Sans, sans-serif;
        max-width: 750px;
        margin: 0 auto;
        min-height: 100vh;
        line-height: 1.8;
    }
    a{
        text-decoration: none;
        color: ${({ theme }) => theme.link};
    }
    * {
        box-sizing: border-box;
    }
`
