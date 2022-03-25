import React, { useLayoutEffect } from 'react';
import SidebarContainer from '../components/SidebarContainer/SidebarContainer';
import { Box, Flex } from '../theme/base/layout';
import { TextRight, Text } from '../theme/base/typography';
import { RegularLink, ContactLink } from "../components/Home/Contact/style";

const AboutPage = () => {

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
                    <RegularLink to="projects" variant='light' textAlign={['left', 'left', 'right']}>Naši projekti</RegularLink>
                    <RegularLink to="process" variant='lightItalic' textAlign={['left', 'left', 'right']}>Naš procesi</RegularLink>
                    <RegularLink variant='boldNoUnderline' to="process" textAlign={['left', 'left', 'right']}>Naš procesi</RegularLink>
                </Flex>
            </SidebarContainer>
            <TextRight mt={{ md: '100px', lg: '240px' }}>
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
