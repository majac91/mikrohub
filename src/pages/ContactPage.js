import React from 'react';
import SidebarContainer from '../components/SidebarContainer/SidebarContainer';
import { Box, Flex } from '../theme/base/layout';
import { TextRight, Text } from '../theme/base/typography';
import { RegularLink, ContactLink } from "../components/Home/Contact/style";

const ContactPage = () => {
    return (
        <Box>
            <SidebarContainer >
                <TextRight>
                    <Text pb='34px' fontSize={{ xxs: '16px', md: '24px' }}>je nagrađivani arhitektonski tim koji se bavi promišljanjem mogućnosti savremenog života u fizički ograničenim prostorima.</Text>
                    <Text pb='34px' fontSize={{ xxs: '16px', md: '24px' }}>Smatramo da kvadratura objekta ne treba da definiše kvalitet prostora. Zato dizajniramo male objekte koji pružaju uslove visokog životnog standarda.</Text>
                    <Text pb='34px' fontSize={{ xxs: '16px', md: '24px' }}>Svaki novi projekat za nas predstavlja izazov i priliku da istražimo nove pristupe u stvaranju savremenih, ekološki odgovornih projekata.</Text>
                    <Text pb='34px' fontSize={{ xxs: '16px', md: '24px' }}>mikro.hhub čine arhitektice Ana Curk I Sanja Cvetković.</Text>
                </TextRight>
                {/* <Text mt={{ xxs: '', md: '125px;' }}>SCROL DOWN</Text> */}
                <Flex flexDirection='column' mt={{ xxs: '', md: '125px;' }}>
                    <RegularLink to="projects" variant='light' textAlign={['left', 'left', 'right']}>Naši projekti</RegularLink>
                    <RegularLink to="process" variant='lightItalic' textAlign={['left', 'left', 'right']}>Naš procesi</RegularLink>
                    <RegularLink variant='boldNoUnderline' to="process" textAlign={['left', 'left', 'right']}>Naš procesi</RegularLink>
                </Flex>
                <TextRight mt={{ md: '240px' }}>
                    <Text fontSize={{ xxs: '16px', md: '70px' }} display='flex' flexDirection='column'>Želite da </Text>
                    <Text fontSize={{ xxs: '16px', md: '70px' }} display='flex' flexDirection='column'>saznate više? </Text>
                    <Text fontSize={{ xxs: '16px', md: '70px' }} display='flex' flexDirection='column'>Pišite nam na </Text>
                </TextRight>
            </SidebarContainer>
            <ContactLink mt={{ md: '81px' }} mb={{ md: '150px' }} href='mailto:zdravo@mikrohhub.com'>zdravo@mikrohhub.com</ContactLink>
        </Box >
    );
}

export default ContactPage;
