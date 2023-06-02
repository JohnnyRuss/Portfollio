import { createGlobalStyle } from "styled-components";
import { scrollBar } from "./helpers.styled";

export const GlobalStyles = createGlobalStyle`
   *,*::after,*::before{
     box-sizing: border-box;
     margin:0;
     padding:0;
   };

   html{
    scroll-behavior:smooth;
    font-size:62.5%;
   }

   body {
    font-family: 'Roboto', sans-serif;
    font-size:${({ theme }) => theme.fontSize.base};
    background:#000;
    color:#fff;

    ${scrollBar};
  }

   input,button{
    border:none;
    outline:none;
    color:inherit;
    text-transform: inherit;
    font-size:inherit;
   }

   button{
    background:none;
    cursor: pointer;
   }

   ul{
    list-style: none;
   }

   a{
    text-decoration:none;
    color:inherit;
   }

 
`;
