import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    html {
      height: 100%;
    }
    body {
      margin:0;
      padding:0;
      font-family: sans-serif;
      background: rgb(34,193,195);
background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
    }
    a{
        text-decoration:none;
        color:inherit
    }
    *{
        box-sizing:border-box
    }
    button{
        cursor: pointer;
    }
`;

export default GlobalStyles;
