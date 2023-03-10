import { createGlobalStyle } from "styled-components";

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

   body{
    font-family: 'Roboto', sans-serif;
    font-size:${({ theme }) => theme.fontSize.base};
    background:#000;
    color:#fff;

    ::-webkit-scrollbar{
      width: 1rem;
    }

    ::-webkit-scrollbar-thumb{
      border-radius:1rem;
      background:${({ theme }) =>
        `linear-gradient(70deg, ${theme.color.red} 35%, ${theme.color.orange} 80%)`};
    }
    
    ::-webkit-scrollbar-track{
      border-radius:1rem;
      background: ${({ theme }) => theme.color.grayishBlue};
    }
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
