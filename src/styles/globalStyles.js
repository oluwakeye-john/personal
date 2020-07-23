import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    body{
        padding: 0;
        margin: 0 auto;
        color: ${({ theme }) => theme.textNormal};
        background-color: ${({ theme }) => theme.bg}; 
        transition: 1s;
        ${"" /* font-family: 'Open Sans', sans-serif; */}
        font-family: 'Roboto', sans-serif;
        max-width: 750px;
        margin: 0 auto;
        min-height: 100vh;
        line-height: 1.8;
        letter-spacing: 0.2dpx;
    }
    
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus {
        -webkit-text-fill-color: ${({ theme }) => theme.textNormal};
        -webkit-box-shadow: 0 0 0 30px ${({ theme }) =>
          theme.bg} inset !important;
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
