import React from 'react';
import SidebarContainer from '../components/SidebarContainer/SidebarContainer';
import { Box, Flex, Wrapper } from '../theme/base/layout';
import { TextRight, Text, OrderedListWrapper, OrderedListItem } from '../theme/base/typography';
import { ContactLink } from "../components/Home/Contact/style";


const ProcessPage = () => {
    return (
        <>
            <Box>
                <SidebarContainer title={['naš', 'proces']}>
                    <TextRight>
                        <Flex justifyContent={{ md: 'flex-end' }}>
                            <Wrapper mr={{ md: '58px' }}>
                                <Text fontSize={{ xxs: '16px', md: '70px' }}>je</Text>
                            </Wrapper>
                            <Wrapper>
                                <Text fontSize={{ xxs: '16px', md: '70px' }}>interaktivan</Text>
                                <Text fontSize={{ xxs: '16px', md: '70px' }}>dinamičan</Text>
                                <Text fontSize={{ xxs: '16px', md: '70px' }}>intuitivan</Text>
                            </Wrapper>
                        </Flex>
                    </TextRight>
                    <TextRight pt={{ md: '80px' }}>
                        <OrderedListWrapper>
                            <OrderedListItem display='flex' mb={{ md: '60px' }}>
                                <Wrapper>
                                    <Text display='inline' fontSize={{ xxs: '16px', md: '100px' }}>Istaživanje</Text>
                                    <Text fontSize={{ xxs: '16px', md: '24px' }}>Upoznavanje sa posebnostima projekta i promišljanje spektra mogućih dizajnerskih pristupa.</Text>
                                </Wrapper>
                            </OrderedListItem>
                            <OrderedListItem display='flex' mb={{ md: '60px' }}>
                                <Wrapper>
                                    <Text display='inline' fontSize={{ xxs: '16px', md: '100px' }}>Koncept</Text>
                                    <Text fontSize={{ xxs: '16px', md: '24px' }}>Testiramo različite pristupe i ideje kako bismo došli do optimalnog rešenja.</Text>
                                </Wrapper>
                            </OrderedListItem>
                            <OrderedListItem display='flex' mb={{ md: '60px' }}>
                                <Wrapper>
                                    <Text display='inline' fontSize={{ xxs: '16px', md: '100px' }}>Dizajn</Text>
                                    <Text fontSize={{ xxs: '16px', md: '24px' }}>Razvijanje odabranog koncepta, razrada detalja i vizaulizacija projekta.</Text>
                                </Wrapper>
                            </OrderedListItem>
                        </OrderedListWrapper>
                    </TextRight>
                    {/* <Text mt={{ xxs: '', md: '125px;' }}>SCROL DOWN</Text> */}
                </SidebarContainer>
            </Box >
            <Text fontFamily='GraphikLight' maxWidth='519px' m='136px auto' textAlign='center'>Stvaralački proces koji se zasniva na empatiji, otvorenoj komunikaciji i sagledavanju potencijalnih izazova donosi nezaboravne rezultate.</Text>
            <ContactLink mt={{ md: '81px' }} mb={{ md: '150px' }} href='mailto:zdravo@mikrohhub.com'>zdravo@mikrohhub.com</ContactLink>
        </>
    );
}

export default ProcessPage;
