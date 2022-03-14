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
import Footer from './components/Footer/Footer';
import DarkForestPage from './pages/DarkForestPage';
import RuralHousePage from './pages/RuralHousePage';


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
        <Route path="dark-forest-house" element={<DarkForestPage />} />
        <Route path="rural-house" element={<RuralHousePage />} />
      </Routes>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
