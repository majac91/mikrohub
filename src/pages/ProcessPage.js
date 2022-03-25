import React, { useRef, useLayoutEffect } from 'react';

import { isMobile } from 'react-device-detect';
import { zoomOut, slideUp } from '../utils/animation/animate';

import SidebarContainer from '../components/SidebarContainer/SidebarContainer';
import { Box, Flex, Wrapper } from '../theme/base/layout';
import { TextRight, Text, OrderedListWrapper, OrderedListItem } from '../theme/base/typography';
import { ContactLink } from "../components/Home/Contact/style";


const ProcessPage = () => {
    let conjunctionRef = useRef(null)
    let description1Ref = useRef(null)
    let description2Ref = useRef(null)
    let description3Ref = useRef(null)
    let step1Ref = useRef(null)
    let step2Ref = useRef(null)
    let step3Ref = useRef(null)


    useLayoutEffect(() => {
        if (!isMobile) {
            slideUp(conjunctionRef);
            slideUp(description1Ref, .5);
            slideUp(description2Ref, .7);
            slideUp(description3Ref, .9);

            slideUp(step1Ref);
            slideUp(step2Ref, .5);
            slideUp(step3Ref, .7);
        }
    }, []);

    return (
        <>
            <Box>
                <SidebarContainer title={['naš', 'proces']}>
                    <TextRight fixed={true}>
                        <Flex justifyContent='flex-end' flexDirection={{ xxs: 'column', md: 'row' }} alignItems={{ xxs: 'flex-end', md: 'flex-start' }}>
                            <Wrapper mr={{ md: '58px' }}>
                                <Text fontSize={{ xxs: '24px', md: '70px' }} ref={(el) => { conjunctionRef = el }}>je</Text>
                            </Wrapper>
                            <Wrapper>
                                <Text fontSize={{ xxs: '24px', md: '70px' }} ref={(el) => { description1Ref = el }} >interaktivan</Text>
                                <Text fontSize={{ xxs: '24px', md: '70px' }} ref={(el) => { description2Ref = el }} >dinamičan</Text>
                                <Text fontSize={{ xxs: '24px', md: '70px' }} ref={(el) => { description3Ref = el }} >intuitivan</Text>
                            </Wrapper>
                        </Flex>
                    </TextRight>
                    <TextRight fixed={true}>
                        <Text fontSize='16px' display={{ md: 'none' }} mt='22px'>Čine ga:</Text>
                    </TextRight>
                    <TextRight pt={{ xxs: '77px', md: '100px', xl: '250px', ultraWide: '300px' }}>
                        <OrderedListWrapper ref={(el) => { step1Ref = el }}>
                            <OrderedListItem display='flex' mb={{ md: '60px' }}>
                                <Wrapper>
                                    <Text display='inline' fontSize={{ xxs: '24px', md: '40px', lg: '60px', xl: '70px', ultraWide: '100px' }}>Istaživanje</Text>
                                    <Text fontSize={{ xxs: '16px', md: '24px' }} maxWidth={{ xxl: '519px' }} ml='auto'>Upoznavanje sa posebnostima projekta i promišljanje spektra mogućih dizajnerskih pristupa.</Text>
                                </Wrapper>
                            </OrderedListItem>
                            <OrderedListItem ref={(el) => { step2Ref = el }} display='flex' mb={{ md: '60px' }}>
                                <Wrapper>
                                    <Text display='inline' fontSize={{ xxs: '24px', md: '40px', lg: '60px', xl: '70px', ultraWide: '100px' }}>Koncept</Text>
                                    <Text fontSize={{ xxs: '16px', md: '24px' }} maxWidth={{ xxl: '519px' }} ml='auto'>Testiramo različite pristupe i ideje kako bismo došli do optimalnog rešenja.</Text>
                                </Wrapper>
                            </OrderedListItem>
                            <OrderedListItem ref={(el) => { step3Ref = el }} display='flex' mb={{ md: '60px' }}>
                                <Wrapper>
                                    <Text display='inline' fontSize={{ xxs: '24px', md: '40px', lg: '60px', xl: '70px', ultraWide: '100px' }}>Dizajn</Text>
                                    <Text fontSize={{ xxs: '16px', md: '24px' }} maxWidth={{ xxl: '519px' }} ml='auto'>Razvijanje odabranog koncepta, razrada detalja i vizaulizacija projekta.</Text>
                                </Wrapper>
                            </OrderedListItem>
                        </OrderedListWrapper>
                    </TextRight>
                </SidebarContainer>
            </Box >
            <Box>
                <Text fontSize={{ xxs: '16px', md: '24px' }} fontFamily='GraphikLight' maxWidth='519px' m={{ xxs: '44px auto', md: '136px auto' }} textAlign={{ xxs: 'left', md: 'center' }}>Stvaralački proces koji se zasniva na empatiji, otvorenoj komunikaciji i sagledavanju potencijalnih izazova donosi nezaboravne rezultate.</Text>
                <ContactLink mt={{ xxs: '32px', md: '81px' }} mb={{ xxs: '83px', md: '150px' }} href='mailto:zdravo@mikrohhub.com' display='flex' flexDirection={{ xxs: 'column', md: 'row' }} alignItems={{ xxs: 'flex-start', xxl: 'center' }} justifyContent={{ md: 'center' }}>
                    <span>zdravo@</span>
                    <span>mikrohhub.com</span>
                </ContactLink>
            </Box>
        </>
    );
}

export default ProcessPage;
