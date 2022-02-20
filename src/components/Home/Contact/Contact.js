import React, { useRef } from 'react';
import { useOnIntersection } from "../../../hooks/useOnIntersection";

import { RegularLink, AnimatedLink } from './style';
import { Box, Flex } from '../../../theme/base/layout';

const Contact = () => {
    const animatedRegularLinkRef = useRef();
    const isOnScreen = useOnIntersection(animatedRegularLinkRef);

    return (
        <Box pt={{ sm: '61px', lg: '217px' }} pb={{ sm: '30px', lg: '200px' }}>
            <Flex flexDirection='column' alignItems='center'>
                <RegularLink to="projects">Naši projekti</RegularLink>
                <RegularLink variant='italic' to="process">Naš procesi</RegularLink>
                <RegularLink variant='light' to="about">Ko smo mi</RegularLink>
                <AnimatedLink className={isOnScreen && 'anim-start'} ref={animatedRegularLinkRef} variant='bold' to="contact">Kontakt</AnimatedLink>
            </Flex>
        </Box>
    );
}

export default Contact;
