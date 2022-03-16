import React, { useRef } from 'react';
import { useOnIntersection } from "../../../hooks/useOnIntersection";

import { RegularLink, AnimatedLink, LinkWrapper } from './style';
import { Box, Flex } from '../../../theme/base/layout';

const Contact = () => {
    const animatedRegularLinkRef = useRef();
    const isOnScreen = useOnIntersection(animatedRegularLinkRef);

    return (
        <Flex position='relative' flexDirection='column' alignItems='center' mt={{ xxs: '110px', lg: '392px' }} mb={{ xxs: '79px', lg: '305px' }} textAlign='center' position='relative'>
            <RegularLink to="projects">Naši projekti</RegularLink>
            <RegularLink variant='italic' to="process">Naš procesi</RegularLink>
            <RegularLink variant='light' to="about">Ko smo mi</RegularLink>
            <AnimatedLink position='absolute' bottom={{ xxs: '-45px', lg: '-110px' }} className={isOnScreen && 'anim-start'} ref={animatedRegularLinkRef} variant='bold' to="contact">Kontakt</AnimatedLink>
        </Flex>

    );
}

export default Contact;
