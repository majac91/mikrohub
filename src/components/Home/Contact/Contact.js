import React, { useRef, useEffect } from 'react';
import { useOnIntersection } from "../../../hooks/useOnIntersection";
import { isMobile } from 'react-device-detect';

import { ProjectsLink, RegularLink, AnimatedLink, LinkWrapper } from './style';
import { Flex } from '../../../theme/base/layout';
import { slideUp } from '../../../utils/animation/animate';

const Contact = ({ isProjectsMenuOpen, toggleProjectsMenu }) => {
    const sectionRef = useRef();

    // console.log(setIsProjectsMenuOpen);
    let link1Ref = useRef(null)
    let link2Ref = useRef(null)
    let link3Ref = useRef(null)
    let link4Ref = useRef(null)

    const isOnScreen = useOnIntersection(sectionRef);

    useEffect(() => {
        if (!isMobile) {
            slideUp(link1Ref);
            slideUp(link2Ref, .4);
            slideUp(link3Ref, .5);
            slideUp(link4Ref, .6);
        }
    }, []);


    return (
        <Flex ref={sectionRef} position='relative' flexDirection='column' alignItems='center' mt={{ xxs: '110px', xl: '217px' }} mb={{ xxs: '79px', lg: '305px' }} textAlign='center' position='relative'>
            <ProjectsLink aria-label='projects menu' onClick={toggleProjectsMenu} ref={(el) => (link1Ref = el)}>Naši projekti</ProjectsLink>
            <RegularLink to='proces' variant='italic' ref={(el) => (link2Ref = el)}>Naš procesi</RegularLink>
            <RegularLink to="o-nama" variant='light' to="about" ref={(el) => (link3Ref = el)}>Ko smo mi</RegularLink>
            <AnimatedLink to="kontakt" position='absolute' bottom={{ xxs: '-45px', lg: '-110px' }} className={isOnScreen && 'anim-start'} ref={(el) => (link4Ref = el)} variant='bold' to="contact">Kontakt</AnimatedLink>
        </Flex >
    );
}

export default Contact;
