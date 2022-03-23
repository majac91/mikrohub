import React, { useEffect } from 'react';
import SidebarContainer from '../components/SidebarContainer/SidebarContainer';
import { Box, Flex } from '../theme/base/layout';
import { TextRight, Text, H1 } from '../theme/base/typography';
import { RegularLink, ContactLink } from "../components/Home/Contact/style";

const ContactPage = () => {

    useEffect(() => {
        document.querySelector('body').classList.add('dark-body');
        return () => {
            document.querySelector('body').classList.remove('dark-body');
        }
    }, []);

    return (
        <Box>
            <H1 mt={{ md: '218px' }} fontSize={{ xl: '160px!important', ultraWide: '200px!important' }}>KONTAKT</H1>
            <TextRight mt={{ md: '116px' }} maxWidth={{ md: '600px' }} ml={{ md: 'auto' }}>
                <Text fontSize={{ xxs: '16px', md: '24px' }} display='flex' flexDirection='column'>Zainteresovani ste za saradnju, neki od naših objekata ili imate ideju koju mislite da možemo da realizujemo? Pišite nam!</Text>
            </TextRight>
            <ContactLink mt={{ md: '52px' }} mb={{ md: '150px' }} href='mailto:zdravo@mikrohhub.com'>zdravo@mikrohhub.com</ContactLink>
        </Box >
    );
}

export default ContactPage;
