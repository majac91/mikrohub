import React, { useRef, useLayoutEffect } from 'react';
import SidebarContainer from '../components/SidebarContainer/SidebarContainer';
import { Box, Flex } from '../theme/base/layout';
import { TextRight, Text } from '../theme/base/typography';
import { ProjectsLink, RegularLink, ContactLink } from "../components/Home/Contact/style";


import { isMobile } from 'react-device-detect';
import { zoomOut, slideUp } from '../utils/animation/animate';

const AboutPage = () => {

    let step1Ref = useRef(null)
    let step2Ref = useRef(null)
    let step3Ref = useRef(null)
    let ctaRef = useRef(null)


    useLayoutEffect(() => {
        if (!isMobile) {
            slideUp(step1Ref);
            slideUp(step2Ref, .5);
            slideUp(step3Ref, .7);
            slideUp(ctaRef, .5);
        }
    }, []);

    return (
        <Box>
            <SidebarContainer title={['mikro.', 'hhub']} >
                <TextRight>
                    <Text pb={{ xxs: '16px', lg: '34px' }} fontSize={{ xxs: '16px', md: '24px' }}>je nagrađivani arhitektonski tim koji se bavi promišljanjem mogućnosti savremenog života u fizički ograničenim prostorima.</Text>
                    <Text pb={{ xxs: '16px', lg: '34px' }} fontSize={{ xxs: '16px', md: '24px' }}>Smatramo da kvadratura objekta ne treba da definiše kvalitet prostora. Zato dizajniramo male objekte koji pružaju uslove visokog životnog standarda.</Text>
                    <Text pb={{ xxs: '16px', lg: '34px' }} fontSize={{ xxs: '16px', md: '24px' }}>Svaki novi projekat za nas predstavlja izazov i priliku da istražimo nove pristupe u stvaranju savremenih, ekološki odgovornih projekata.</Text>
                    <Text pb={{ xxs: '16px', lg: '34px' }} fontSize={{ xxs: '16px', md: '24px' }}>mikro.hhub čine arhitektice Ana Curk I Sanja Cvetković.</Text>
                </TextRight>
                <Flex flexDirection='column' mt={{ xxs: '', md: '125px;' }} display={{ xxs: 'none', lg: 'flex' }}>
                    <ProjectsLink aria-label='projects menu' ref={(el) => { step1Ref = el }} variant='light' textAlign={['left', 'left', 'right']}>Naši projekti</ProjectsLink>
                    <RegularLink ref={(el) => { step2Ref = el }} to="/proces" variant='lightItalic' textAlign={['left', 'left', 'right']}>Naš proces</RegularLink>
                    <RegularLink ref={(el) => { step3Ref = el }} variant='boldNoUnderline' to="/kontakt" textAlign={['left', 'left', 'right']}>Kontakt</RegularLink>
                </Flex>
            </SidebarContainer>
            <TextRight ref={(el) => { ctaRef = el }} mt={{ md: '100px', lg: '240px' }}>
                <Text fontSize={{ xxs: '16px', md: '50px', xl: '70px' }} display='flex' flexDirection='column'>Želite da </Text>
                <Text fontSize={{ xxs: '16px', md: '50px', xl: '70px' }} display='flex' flexDirection='column'>saznate više? </Text>
                <Text fontSize={{ xxs: '16px', md: '50px', xl: '70px' }} display='flex' flexDirection='column'>Pišite nam na </Text>
            </TextRight>
            <ContactLink mt={{ xxs: '32px', md: '81px' }} mb={{ xxs: '83px', md: '150px' }} href='mailto:zdravo@mikrohhub.com' display='flex' flexDirection={{ xxs: 'column', md: 'row' }} alignItems={{ xxs: 'flex-start', xxl: 'center' }} justifyContent={{ lg: 'center' }}>
                <span>zdravo@</span>
                <span>mikrohhub.com</span>
            </ContactLink>
        </Box >
    );
}

export default AboutPage;
