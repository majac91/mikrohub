import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/GlobalStyles";
import theme from "./theme/theme";
import {
  H1,
  H2,
  H3,
  Text,
  ButtonText,
} from "./theme/typography.js";

import Navbar from './components/Navbar/Navbar'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>
      <div className="App">
        <Navbar></Navbar>
        <header className="App-header">
          <H1 space='smaller' fontSize='display1'>
            Hello
        </H1>
          <H2>heading2</H2>
        </header>
      </div>
    </ThemeProvider>

  );
}

export default App;
