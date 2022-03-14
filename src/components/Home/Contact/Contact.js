import React, { useRef } from 'react';
import { useOnIntersection } from "../../../hooks/useOnIntersection";

import { RegularLink, AnimatedLink, LinkWrapper } from './style';
import { Box, Flex } from '../../../theme/base/layout';

const Contact = () => {
    const animatedRegularLinkRef = useRef();
    const isOnScreen = useOnIntersection(animatedRegularLinkRef);

    return (
        <Box pt={{ xs: '110px', lg: '392px' }} pb={{ xs: '79px', lg: '305px' }} textAlign='center' position='relative'>
            <LinkWrapper>
                <RegularLink to="projects">Naši projekti</RegularLink>
                <RegularLink variant='italic' to="process">Naš procesi</RegularLink>
                <RegularLink variant='light' to="about">Ko smo mi</RegularLink>
                <AnimatedLink className={isOnScreen && 'anim-start'} ref={animatedRegularLinkRef} variant='bold' to="contact">Kontakt</AnimatedLink>
            </LinkWrapper>
        </Box>

    );
}

export default Contact;
