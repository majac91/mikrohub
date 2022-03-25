import React from 'react';
import HomeCover from '../components/Home/HomeCover/HomeCover';
import ProjectsSection from '../components/Home/ProjectsSection/ProjectsSection';
import Contact from '../components/Home/Contact/Contact';

const HomePage = ({ isProjectsMenuOpen, toggleProjectsMenu }) => {
    return (
        <header className="App-header">
            <HomeCover />
            <ProjectsSection />
            <Contact isProjectsMenuOpen={isProjectsMenuOpen} toggleProjectsMenu={toggleProjectsMenu} />
        </header>
    );
}

export default HomePage;
