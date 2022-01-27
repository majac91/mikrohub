import { createGlobalStyle } from 'styled-components';
import fonts from "./fonts";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

   .App {
      min-width: 100vw;
      min-height: 100vh;
      height: 100%;
      width: 100%;

      @media (max-width: 768px) {
      overflow: hidden;
      }
   }

    ul, ol, li {
      list-style: none;
      margin: unset;
  }

  input {
      color: inherit;
      border: none;
      border-radius: 0;
      box-shadow: none;
      background-color: transparent;

      &:focus {
          border-color: initial;
          outline: none;
          box-shadow: none;
      }
  }

  button {
    background-color: transparent;
    cursor: pointer;
    color: inherit;
    font-family: inherit;
    border: none;
}

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;