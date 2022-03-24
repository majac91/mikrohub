import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { isMobile } from 'react-device-detect';

import img from "../../../img/homepage/landingpage_skroll_-1.jpg"

import { ImgWrapper } from '../../../theme/base/media';
import { Flex } from '../../../theme/base/layout';
import { VerticalText, ScrollingLetter, PictureCardWrapper } from './style';

import { zoomOut } from '../../../utils/animation/animate';

const UrbanHouseCard = ({ scrollWrapperRef }) => {
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
        <PictureCardWrapper bg='white' ml={{ lg: '-278px' }} width='100%' p={{ md: '50px 60px', xl: '80px 90px', xxl: '150px 160px' }}>
            <Flex>
                <VerticalText color='salmon' fontSize='h1' ml='xxl' display={{ xl: 'none', xxl: 'block' }}>Urbana kuća</VerticalText>
                <ImgWrapper scale='1.3' ref={(el) => (imgRef = el)} maxWidth='437px' minWidth='400px' aspect='119%' ml='auto'>
                    <img src={img} alt="" />
                </ImgWrapper>
            </Flex >
            <ScrollingLetter ref={letterRef} color='salmon' fontFamily='GraphikLight' right='-50px'>u.</ScrollingLetter>
        </PictureCardWrapper >
    );
};

export default UrbanHouseCard;
