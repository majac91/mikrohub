import React from 'react';
import { H1, H2 } from '../theme/base/typography';
import HomeCover from '../components/Home/HomeCover/HomeCover';
import ProjectsSection from '../components/Home/ProjectsSection/ProjectsSection';
import Contact from '../components/Home/Contact/Contact';

const HomePage = () => {
    return (
        <header className="App-header">
            <HomeCover />
            <ProjectsSection />
            <Contact />
        </header>
    );
}

export default HomePage;
