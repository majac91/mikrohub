import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";
import {
  H1,
  H2,
  H3,
  Text,
  ButtonText,
} from "./styled-components/typography.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <H1 space={props => this.props.spaces.smaller} fontSize={[3, 4, 5, 6]}>
            Hello
        </H1>
          <H2>heading2</H2>
        </header>
      </div>
    </ThemeProvider>

  );
}

export default App;
