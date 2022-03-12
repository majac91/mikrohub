import React from 'react';
import { AboutTitle, AboutText } from './style';
import { Box, Flex } from '../../../theme/base/layout';
import { TextRight } from '../../../theme/base/typography';

const ProjectAbout = ({ title, children }) => {
    return (
        <Box>
            <Flex pt={{ xs: '39px', md: '95px' }} pb={{ xs: '47px', md: '113px' }} flexDirection={{ xs: 'column', md: 'row' }} alignItems='center'>
                <AboutTitle>{title}</AboutTitle>
                <AboutText>
                    <TextRight>{children}</TextRight>
                </AboutText>
            </Flex >
        </Box>
    );
}

export default ProjectAbout;
