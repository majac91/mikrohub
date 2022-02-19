import React from 'react';
import { H1, H2 } from '../theme/base/typography';
import HomeCover from '../components/Home/HomeCover/HomeCover';
import ProjectsSection from '../components/Home/ProjectsSection/ProjectsSection';

const HomePage = () => {
    return (
        <header className="App-header">
            <HomeCover />
            <ProjectsSection />
            <HomeCover />

        </header>
    );
}

export default HomePage;
