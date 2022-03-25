import React, { useEffect } from 'react';
import SidebarContainer from '../components/SidebarContainer/SidebarContainer';
import { PageWrapper, Box, Flex } from '../theme/base/layout';
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
        <PageWrapper>
            <H1 mt={{ xxs: '110px', md: '218px' }} fontSize={{ xxs: '70px', xl: '160px!important', ultraWide: '200px!important' }}>KONTAKT</H1>
            <TextRight mt={{ xxs: '32px', md: '116px' }} maxWidth={{ md: '600px' }} ml={{ md: 'auto' }}>
                <Text fontSize={{ xxs: '16px', md: '24px' }} display='flex' flexDirection='column'>Zainteresovani ste za saradnju, neki od naših objekata ili imate ideju koju mislite da možemo da realizujemo? Pišite nam!</Text>
            </TextRight>
            <ContactLink mt={{ xxs: '32px', md: '52px' }} mb={{ md: '150px' }} href='mailto:zdravo@mikrohhub.com' display='flex' flexDirection={{ xxs: 'column', xxl: 'row' }} alignItems={{ xxs: 'flex-start', xxl: 'center' }} justifyContent={{ xxl: 'center' }}>
                <span>zdravo@</span>
                <span>mikrohhub.com</span>
            </ContactLink>
        </PageWrapper >
    );
}

export default ContactPage;
