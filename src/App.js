import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/GlobalStyles";
import theme from "./theme/base/theme";
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import ProcessPage from './pages/ProcessPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="process" element={<ProcessPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </ThemeProvider>

  );
}

export default App;
