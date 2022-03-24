import React, { useRef, useEffect } from 'react';
import { useOnIntersection } from "../../../hooks/useOnIntersection";

import { RegularLink, AnimatedLink, LinkWrapper } from './style';
import { Box, Flex } from '../../../theme/base/layout';
import { slideUp } from '../../../utils/animation/animate';

const Contact = () => {
    const sectionRef = useRef();

    let link1Ref = useRef(null)
    let link2Ref = useRef(null)
    let link3Ref = useRef(null)
    let link4Ref = useRef(null)

    const isOnScreen = useOnIntersection(sectionRef);

    useEffect(() => {
        slideUp(link1Ref);
        slideUp(link2Ref, .4);
        slideUp(link3Ref, .5);
        slideUp(link4Ref, .6);
    }, []);

    return (
        <Flex ref={sectionRef} position='relative' flexDirection='column' alignItems='center' mt={{ xxs: '110px', xl: '217px' }} mb={{ xxs: '79px', lg: '305px' }} textAlign='center' position='relative'>
            <RegularLink to="projects" ref={(el) => (link1Ref = el)}>Naši projekti</RegularLink>
            <RegularLink variant='italic' to="process" ref={(el) => (link2Ref = el)}>Naš procesi</RegularLink>
            <RegularLink variant='light' to="about" ref={(el) => (link3Ref = el)}>Ko smo mi</RegularLink>
            <AnimatedLink position='absolute' bottom={{ xxs: '-45px', lg: '-110px' }} className={isOnScreen && 'anim-start'} ref={(el) => (link4Ref = el)} variant='bold' to="contact">Kontakt</AnimatedLink>
        </Flex>

    );
}

export default Contact;
