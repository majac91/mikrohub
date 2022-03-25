import React, { useState } from 'react';
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
import AshwoodHousePage from './pages/AshwoodHousePage';
import UrbanHousePage from './pages/UrbanHousePage';


function App() {
  const [isProjectsMenuOpen, setIsProjectsMenuOpen] = useState(false);

  const toggleProjectsMenu = () => {
    setIsProjectsMenuOpen(prev => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar isProjectsMenuOpen={isProjectsMenuOpen} setIsProjectsMenuOpen={setIsProjectsMenuOpen} toggleProjectsMenu={toggleProjectsMenu} />

      <Routes>
        <Route path="/" element={<HomePage isProjectsMenuOpen={isProjectsMenuOpen} toggleProjectsMenu={toggleProjectsMenu} />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="process" element={<ProcessPage />} />
        <Route exact path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="dark-forest-house" element={<DarkForestPage />} />
        <Route path="rural-house" element={<RuralHousePage />} />
        <Route path="ashwood-house" element={<AshwoodHousePage />} />
        <Route path="urban-house" element={<UrbanHousePage />} />
      </Routes>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
