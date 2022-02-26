import React from 'react';
import { AboutTitle } from './style';
import { Box } from '../../theme/base/layout';

const ProjectAbout = ({ title, text }) => {
    return (
        <Box pt={['39px', '95px']} pb={['47px', '113px']}>
            <AboutTitle>{title}</AboutTitle>
        </Box >
    );
}

export default ProjectAbout;
