import React, { useRef } from 'react';
import { gsap } from 'gsap';

import { Box, Flex, DarkBox, Wrapper } from '../../../theme/base/layout';
import { H2, Text, LinkText } from '../../../theme/base/typography';
import ProjectCard from "../ProjectCard/ProjectCard"
import { ImgWrapper } from '../../../theme/base/media';

import img from "../../../img/homepage/landingpage_skroll_01_01.jpg"

const ProjectsSection = () => {
    const scrollWrapperRef = useRef(null);

    return (
        <DarkBox ref={scrollWrapperRef} pt={{ xxs: 'xl', lg: '126px' }} pb={{ xxs: '81px', lg: '156px' }}>
            <Box>
                <Flex alignItems='center'>
                    <Wrapper maxWidth='450px' mr='xxl'>
                        <H2>Darkforest kuća</H2>
                        <ImgWrapper display={{ xl: 'none' }} maxWidth='437px' aspect='119%'>
                            <img src={img} alt="" />
                        </ImgWrapper>
                        <Text fontFamily='GraphikLight' fontSize={{ xxs: 'p', xl: '24px' }} mt='xl' mb={{ xxs: 's', md: 'xl' }}>Projektovana za obronke Stare planine Darkforest kuća je osvojila <LinkText href='' target='_blank'>drugu nagradu</LinkText> na međunarodnom konkursu Mini home 2021. godine.</Text>
                        <LinkText fontFamily='GraphikLight' fontSize={{ xxs: '24px', xl: 'h4' }} >Više o projektu</LinkText>
                    </Wrapper>
                    <ProjectCard scrollWrapperRef={scrollWrapperRef} />
                </Flex>
            </Box>
        </DarkBox>
    );
}

export default ProjectsSection;
