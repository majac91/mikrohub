import { createGlobalStyle } from 'styled-components';
import GraphikLightOTF from "../fonts/GraphikLight.otf";
import GraphikRegularOTF from "../fonts/GraphikRegular.otf";
import GraphikSemiboldOTF from "../fonts/GraphikSemibold.otf";
import GraphikBoldOTF from "../fonts/GraphikBold.otf";
import GraphikExtralight from "../fonts/GraphikExtralight.otf";
import GraphikExtralightItalic from "../fonts/GraphikExtralightItalic.otf";
import GraphikMediumItalic from "../fonts/GraphikMediumItalic.otf";
import GraphikRegularItalic from "../fonts/GraphikRegularItalic.otf";
import GraphikSemiboldItalic from "../fonts/GraphikSemiboldItalic.otf";
import GraphikThin from "../fonts/GraphikThin.otf";

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

  @font-face {
    font-family: 'GraphikExtralight';
    src: url('${GraphikExtralight}') format('opentype');
  }

  @font-face {
    font-family: 'GraphikExtralightItalic';
    src: url('${GraphikExtralightItalic}') format('opentype');
  }


  @font-face {
    font-family: 'GraphikMediumItalic';
    src: url('${GraphikMediumItalic}') format('opentype');
  }


  @font-face {
    font-family: 'GraphikRegularItalic';
    src: url('${GraphikRegularItalic}') format('opentype');
  }

  @font-face {
    font-family: 'GraphikSemiboldItalic';
    src: url('${GraphikSemiboldItalic}') format('opentype');
  }

  @font-face {
    font-family: 'GraphikThin';
    src: url('${GraphikThin}') format('opentype');
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    outline: none;

    &, &:before, &:after {
        box-sizing: border-box;
    }
  }


  body {
    margin: 0;
    padding: 0;
    font-family: 'GraphikRegular';
    overflow: hidden;

    @include media-breakpoint-up(lg) {
      overflow: visible;
    }
  }


  html {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100vh;
    width: 100vw;
    background-color: $page-background-color;
  }


// RESPONSIVE
html {
  font-size: 5vw;

  @include media-breakpoint-up(xs) {
    font-size: 16px;
  }

  @include media-breakpoint-up(xmd) {
    font-size: 1.11vw;
  }
}
   .App {
      min-width: 100vw;
      min-height: 100vh;
      height: 100%;
      width: 100%;
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

  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;

export default GlobalStyle;