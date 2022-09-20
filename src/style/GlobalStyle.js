import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #e9ecef;
  }

  button, input {
    outline: none; 
    background: none;
  }
`;

export default GlobalStyle;
