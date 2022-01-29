import { createGlobalStyle } from 'styled-components';
import fonts from "./fonts";
import GraphikLightOTF from "../fonts/GraphikLight.otf";
import GraphikRegularOTF from "../fonts/GraphikRegular.otf";
import GraphikSemiboldOTF from "../fonts/GraphikSemibold.otf";
import GraphikBoldOTF from "../fonts/GraphikBold.otf";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'GraphikLight';
    src: url('${GraphikLightOTF}') format('opentype');
  }

  @font-face {
    font-family: 'GraphikRegular';
    src: url('${GraphikRegularOTF}') format('opentype');
  }

  @font-face {
    font-family: 'GraphikSemibold';
    src: url('${GraphikSemiboldOTF}') format('opentype');
  }

  @font-face {
    font-family: 'GraphikBold';
    src: url('${GraphikBoldOTF}') format('opentype');
  }

  html {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: 'GraphikRegular';
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
      margin: 0;
      padding: 0;
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