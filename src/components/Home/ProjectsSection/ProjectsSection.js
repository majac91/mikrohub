import React, { useRef, useEffect, useLayoutEffect } from 'react';

import { Box, Flex, DarkBox, Wrapper } from '../../../theme/base/layout';
import { H2, Text, TextLink, InlineLink } from '../../../theme/base/typography';
import { ImgWrapper } from '../../../theme/base/media';
import DarkForestCard from "../ProjectCards/DarkForestCard"
import UrbanHouseCard from '../ProjectCards/UrbanHouseCard';

import darkForestImg from "../../../img/homepage/landingpage_skroll_01_01.jpg"
import urbanHouseImg from "../../../img/homepage/landingpage_skroll_-1.jpg"

import { slideUp } from '../../../utils/animation/animate';
import { isMobile } from 'react-device-detect';

const ProjectsSection = () => {
    const project1WrapperRef = useRef();
    const project2WrapperRef = useRef();

    let section1Title = useRef(null)
    let section1Text = useRef(null)
    let section1Link = useRef(null)

    let section2Title = useRef(null)
    let section2Text = useRef(null)
    let section2Link = useRef(null)

    useLayoutEffect(() => {
        if (!isMobile) {
            slideUp(section1Title);
            slideUp(section1Text);
            slideUp(section1Link);

            slideUp(section2Title, null, '20%');
            slideUp(section2Text, null, '20%');
            slideUp(section2Link, null, '20%');
        }
    }, []);


    return (
        <DarkBox>
            <DarkBox pt={{ xxs: 'xl', lg: '126px' }} pb={{ xxs: '81px', lg: '156px' }} ref={project1WrapperRef}>
                <Box>
                    <Flex alignItems='center'>
                        <Wrapper maxWidth='450px' mr={{ lg: 'xxl' }}>
                            <H2 ref={(el) => (section1Title = el)} textAlign={{ xs: 'center', md: 'left' }} mb={{ xs: '25px', md: 'unset' }}>Darkforest kuća</H2>
                            <ImgWrapper display={{ xl: 'none' }} maxWidth='437px' aspect='119%'>
                                <img src={darkForestImg} alt="" />
                            </ImgWrapper>
                            <Text ref={(el) => (section1Text = el)} fontFamily='GraphikLight' fontSize={{ xxs: 'p', xl: '24px' }} textAlign={{ xs: 'center', md: 'left' }} mt='xl' mb={{ xxs: 's', md: 'xl' }}>Projektovana za obronke Stare planine Darkforest kuća je osvojila <InlineLink href='https://www.gradnja.rs/darkforest-sanja-cvetkovic-ana-curk-konkurs-minihome/' target='_blank'>drugu nagradu</InlineLink> na međunarodnom konkursu Mini home 2021. godine.</Text>
                            <TextLink ref={(el) => (section1Link = el)} to='dark-forest-house' fontFamily='GraphikLight' fontSize={{ xxs: '24px', xl: 'h4' }} textAlign={{ xs: 'center', md: 'left' }} display='block'>Više o projektu</TextLink>
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
                            <H2 ref={(el) => (section2Title = el)} textAlign={{ xs: 'center', md: 'right' }} mb={{ xs: '25px', md: 'unset' }}>Urbana kuća</H2>
                            <ImgWrapper display={{ xl: 'none' }} maxWidth='437px' aspect='119%'>
                                <img src={urbanHouseImg} alt="" />
                            </ImgWrapper>
                            <Text ref={(el) => (section2Text = el)} fontFamily='GraphikLight' fontSize={{ xxs: 'p', xl: '24px' }} mt='xl' mb={{ xxs: 's', md: 'xl' }} textAlign={{ xs: 'center', md: 'right' }}>Urbana kuća je mikro kuća površine 25 m2 i predstavlja održivo dizajnersko rešenje koje je moguće postaviti bilo gde u svetu.</Text>
                            <TextLink ref={(el) => (section2Link = el)} to="urban-house" fontFamily='GraphikLight' fontSize={{ xxs: '24px', xl: 'h4' }} textAlign={{ xs: 'center', md: 'right' }} display='block'>Više o projektu</TextLink>
                        </Wrapper>
                    </Flex>
                </Box>
            </DarkBox>

        </DarkBox>
    );
}

export default ProjectsSection;
