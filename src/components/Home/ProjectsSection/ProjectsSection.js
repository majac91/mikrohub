import React, { useRef } from 'react';
import { gsap } from 'gsap';

import { Box, Flex, DarkBox, Wrapper } from '../../../theme/base/layout';
import { H2, Text, LinkText } from '../../../theme/base/typography';
import { ImgWrapper } from '../../../theme/base/media';
import DarkForestCard from "../ProjectCards/DarkForestCard"
import UrbanHouseCard from '../ProjectCards/UrbanHouseCard';

import darkForestImg from "../../../img/homepage/landingpage_skroll_01_01.jpg"
import urbanHouseImg from "../../../img/homepage/landingpage_skroll_-1.jpg"

const ProjectsSection = () => {
    const project1WrapperRef = useRef();
    const project2WrapperRef = useRef();

    return (
        <DarkBox>
            <DarkBox pt={{ xxs: 'xl', lg: '126px' }} pb={{ xxs: '81px', lg: '156px' }} ref={project1WrapperRef}>
                <Box>
                    <Flex alignItems='center'>
                        <Wrapper maxWidth='450px' mr={{ lg: 'xxl' }}>
                            <H2 textAlign={{ xs: 'center', md: 'left' }} mb={{ xs: '25px', md: 'unset' }}>Darkforest kuća</H2>
                            <ImgWrapper display={{ xl: 'none' }} maxWidth='437px' aspect='119%'>
                                <img src={darkForestImg} alt="" />
                            </ImgWrapper>
                            <Text fontFamily='GraphikLight' fontSize={{ xxs: 'p', xl: '24px' }} textAlign={{ xs: 'center', md: 'left' }} mt='xl' mb={{ xxs: 's', md: 'xl' }}>Projektovana za obronke Stare planine Darkforest kuća je osvojila <LinkText href='' target='_blank'>drugu nagradu</LinkText> na međunarodnom konkursu Mini home 2021. godine.</Text>
                            <LinkText fontFamily='GraphikLight' fontSize={{ xxs: '24px', xl: 'h4' }} textAlign={{ xs: 'center', md: 'left' }} display='block'>Više o projektu</LinkText>
                        </Wrapper>
                        <DarkForestCard scrollWrapperRef={project1WrapperRef} />
                    </Flex>
                </Box>
            </DarkBox>
            <DarkBox pt={{ xxs: 'xl', lg: '126px' }} pb={{ xxs: '81px', lg: '156px' }} ref={project2WrapperRef}>
                <Box>
                    <Flex alignItems='center'>
                        <UrbanHouseCard scrollWrapperRef={project2WrapperRef} />
                        <Wrapper maxWidth='450px' ml={{ lg: 'xxl' }}>
                            <H2 textAlign={{ xs: 'center', md: 'right' }} mb={{ xs: '25px', md: 'unset' }}>Urbana kuća</H2>
                            <ImgWrapper display={{ xl: 'none' }} maxWidth='437px' aspect='119%'>
                                <img src={urbanHouseImg} alt="" />
                            </ImgWrapper>
                            <Text fontFamily='GraphikLight' fontSize={{ xxs: 'p', xl: '24px' }} mt='xl' mb={{ xxs: 's', md: 'xl' }} textAlign={{ xs: 'center', md: 'right' }}>Projektovana za obronke Stare planine Darkforest kuća je osvojila <LinkText href='' target='_blank'>drugu nagradu</LinkText> na međunarodnom konkursu Mini home 2021. godine.</Text>
                            <LinkText fontFamily='GraphikLight' fontSize={{ xxs: '24px', xl: 'h4' }} textAlign={{ xs: 'center', md: 'right' }} display='block'>Više o projektu</LinkText>
                        </Wrapper>
                    </Flex>
                </Box>
            </DarkBox>

        </DarkBox>
    );
}

export default ProjectsSection;
