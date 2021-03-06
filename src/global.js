import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing:border-box;
    }

    body,html{
        font-family:"Montserrat",sans-serif;
        margin:0;
        padding:0;
        
    @media (min-width: 1000px) {
      font-size:18px;
    }
    }
    p{
        margin:0;
    }
`;
