import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

import img from "../../../img/homepage/landingpage_skroll_01_01.jpg"

import { ImgWrapper } from '../../../theme/base/media';
import { Flex } from '../../../theme/base/layout';
import { VerticalText, ScrollingLetter, PictureCardWrapper } from './style';
import { isMobile } from 'react-device-detect';

import { zoomOut } from '../../../utils/animation/animate';


const DarkForestCard = ({ scrollWrapperRef }) => {
    const letterRef = useRef(null);

    useEffect(() => {
        if (!isMobile) {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: scrollWrapperRef.current,
                    pin: true,
                    scrub: true,
                }
            });

            tl.to(letterRef.current, {
                top: "60%",
                autoAlpha: 0,
            });
        }
    }, []);

    let imgRef = useRef(null)

    useLayoutEffect(() => {
        zoomOut(imgRef);
    }, []);

    return (
        <PictureCardWrapper bg='white' mr={{ lg: '-278px' }} width='100%' p={{ md: '50px 60px', xl: '80px 90px', xxl: '150px 160px' }}>
            <ScrollingLetter ref={letterRef} color='green' fontFamily='GraphikLight' left='-40px'>d.</ScrollingLetter>
            <Flex>
                <ImgWrapper scale='1.3' ref={(el) => (imgRef = el)} maxWidth={{ lg: '437px' }} minWidth={{ lg: '400px' }} aspect='119%' >
                    <img src={img} alt="" />
                </ImgWrapper>
                <VerticalText color='green' fontSize='h1' ml='xxl' display={{ xl: 'none', xxl: 'block' }}>Darkforest kuća</VerticalText>
            </Flex >
        </PictureCardWrapper >
    );
};

export default DarkForestCard;
