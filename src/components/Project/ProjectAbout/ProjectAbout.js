import React from 'react';
import { AboutTitle, AboutText } from './style';
import { Box, Flex } from '../../../theme/base/layout';
import { TextRight } from '../../../theme/base/typography';

const ProjectAbout = ({ title, children }) => {
    return (
        <Box>
            <Flex pt={['39px', '95px']} pb={['47px', '113px']} flexDirection={{ xs: 'column', md: 'row' }} alignItems='center'>
                <AboutTitle>{title}</AboutTitle>
                <AboutText>
                    <TextRight>{children}</TextRight>
                </AboutText>
            </Flex >
        </Box>
    );
}

export default ProjectAbout;
