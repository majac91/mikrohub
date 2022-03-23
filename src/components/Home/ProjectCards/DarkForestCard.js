import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import img from "../../../img/homepage/landingpage_skroll_01_01.jpg"

import { ImgWrapper } from '../../../theme/base/media';
import { Flex } from '../../../theme/base/layout';
import { VerticalText, ScrollingLetter, PictureCardWrapper } from './style';
import { isMobile } from 'react-device-detect';


const DarkForestCard = ({ scrollWrapperRef }) => {
    const letterRef = useRef(null);

    useEffect(() => {
        if (!isMobile) {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: scrollWrapperRef.current,
                    end: () => "+=" + scrollWrapperRef.current.clientHeight,
                    pin: true,
                    scrub: true,
                }
            });

            tl.to(letterRef.current, {
                top: "90%",
                autoAlpha: 0,
            });
        }
    }, []);

    return (
        <PictureCardWrapper bg='white' mr={{ lg: '-278px' }} width='100%' p={{ md: '50px 60px', xl: '80px 90px', xxl: '150px 160px' }}>
            <ScrollingLetter ref={letterRef} color='green' fontFamily='GraphikLight' left='-40px'>d.</ScrollingLetter>
            <Flex>
                <ImgWrapper maxWidth={{ lg: '437px' }} minWidth={{ lg: '400px' }} aspect='119%' >
                    <img src={img} alt="" />
                </ImgWrapper>
                <VerticalText color='green' fontSize='h1' ml='xxl' display={{ xl: 'none', xxl: 'block' }}>Darkforest kuća</VerticalText>
            </Flex >
        </PictureCardWrapper >
    );
};

export default DarkForestCard;
