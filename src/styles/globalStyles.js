import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    body{
        padding: 0;
        margin: 0 auto;
        color: ${({ theme }) => theme.textNormal};
        background-color: ${({ theme }) => theme.bg}; 
        ${"" /* transition: background-color .3s, color .3s; */}
        ${"" /* font-family: 'Open Sans', sans-serif; */}
        font-family: 'Roboto', sans-serif;
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
        color: ${({ theme }) => theme.primary};
        
    }

    *, ::after, ::before {
        box-sizing: border-box;
    }
    
    #gatsby-plugin-page-progress{
        background: linear-gradient(to right, #e48a28 0%, #cc4856 50%, #6e3a6c 100%);
    }

    body::-webkit-scrollbar{
        width: 7px;
    }

    body::-webkit-scrollbar-thumb{
        background: ${({ theme }) => theme.primary};
        border-radius: 15px;
    }

    body::-webkit-scrollbar-track {
        background-color: transparent;
        border-radius: 15px;
}

    .theme-light {
        --theme-color-mode: light;
        --theme-color-bg: #fff;
        --theme-color-textNormal: #222;
        --theme-color-navbarLink: rgba(0, 0, 0, 0.45);
        --theme-color-primary: rgba(169,3,41,1);
        --theme-color-cardBg: #fff;
        --theme-color-blogTextNormal: #222;
        --theme-color-boxShadow: 0 0 10px #ccc;
    }

    .theme-dark {
        --theme-color-mode: dark;
        --theme-color-bg: rgb(21, 32, 43);
        --theme-color-textNormal: rgba(255, 255, 255, 0.88);
        --theme-color-navbarLink: rgba(255, 255, 255, 0.5);
        --theme-color-primary: #FD6D6D;
        --theme-color-cardBg: #243447;
        --theme-color-blogTextNormal: rgba(255, 255, 255, 0.7);
        --theme-color-boxShadow: 0;
    }

    .fixed{
        overflow-y: hidden;
    }

    .animate{
        transition: background-color .2s, color .2s;
    }

    .smooth-scroll {
        scroll-behavior: smooth;
    }

`

//FD6363
