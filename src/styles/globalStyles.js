import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    body{
        padding: 0;
        margin: 0 auto;
        color: ${({ theme }) => theme.textNormal};
        background-color: ${({ theme }) => theme.bg}; 
        transition: 0.3s;
        font-family: 'Open Sans', sans-serif; 
        ${"" /* font-family: 'Roboto', sans-serif; */}
        max-width: 750px;
        margin: 0 auto;
        min-height: 100vh;
        line-height: 1.8;
    }
    a{
        text-decoration: none;
        color: ${({ theme }) => theme.link};
    }
    *, ::after, ::before {
        box-sizing: border-box;
    }
    #gatsby-plugin-page-progress{
        background: linear-gradient(to right, #e48a28 0%, #cc4856 50%, #6e3a6c 100%);
    }

    body::-webkit-scrollbar{
        width: 0.25rem;
    }

    body::-webkit-scrollbar-thumb{
        background: ${({ theme }) => theme.link};
    }

`
