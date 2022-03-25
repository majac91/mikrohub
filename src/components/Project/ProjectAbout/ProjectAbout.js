import React, { useRef, useLayoutEffect } from 'react';
import { AboutTitle, AboutText } from './style';
import { Box, Flex } from '../../../theme/base/layout';
import { TextRight } from '../../../theme/base/typography';

import { isMobile } from 'react-device-detect';
import { slideUp } from '../../../utils/animation/animate';

const ProjectAbout = ({ title, children }) => {
    let titleRef = useRef(null)

    useLayoutEffect(() => {
        if (!isMobile) {
            slideUp(titleRef);
        }
    }, []);

    return (
        <Box>
            <Flex pt={{ xs: '39px', md: '95px' }} pb={{ xs: '47px', md: '113px' }} flexDirection={{ xs: 'column', md: 'row' }} alignItems='center'>
                <AboutTitle ref={(el) => (titleRef = el)}>{title}</AboutTitle>
                <AboutText>
                    <TextRight>{children}</TextRight>
                </AboutText>
            </Flex >
        </Box>
    );
}

export default ProjectAbout;
