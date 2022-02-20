import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import img from "../../../img/homepage/landingpage_skroll_01_01.jpg"

import { ImgWrapper } from '../../../theme/base/media';
import { Flex } from '../../../theme/base/layout';
import { VerticalText, ScrollingLetter, PictureCardWrapper } from './style';


const DarkForestCard = ({ scrollWrapperRef }) => {
    const letterRef = useRef(null);

    useEffect(() => {
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
    }, []);

    return (
        <PictureCardWrapper bg='white' mr='-278px' width='100%' p={{ md: '50px 60px', xl: '80px 90px', ultraWide: '150px 160px' }}>
            <ScrollingLetter ref={letterRef} color='green' fontFamily='GraphikLight' left='-40px'>d.</ScrollingLetter>
            <Flex>
                <ImgWrapper maxWidth='437px' minWidth='400px' aspect='119%' >
                    <img src={img} alt="" />
                </ImgWrapper>
                <VerticalText color='green' fontSize='h1' ml='xxl' display={{ xl: 'none', ultraWide: 'block' }}>Darkforest kuća</VerticalText>
            </Flex >
        </PictureCardWrapper >
    );
};

export default DarkForestCard;
