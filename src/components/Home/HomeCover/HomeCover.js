import React, { useEffect, useRef } from 'react';
import { Box, Flex } from '../../../theme/base/layout';
import { Text } from '../../../theme/base/typography';
import { HoverSlider, HoverImg } from './style';

import img1 from "../../../img/homepage/landingpage_skroll_01_01.jpg"
import img2 from "../../../img/homepage/landingpage_skroll_-1.jpg"
import img3 from "../../../img/homepage/landingpage_skroll_-2.jpg"
import img4 from "../../../img/homepage/landingpage_skroll_-3.jpg"
import img5 from "../../../img/homepage/landingpage_skroll_-4.jpg"
import img6 from "../../../img/homepage/landingpage_skroll_-5.jpg"
import img7 from "../../../img/homepage/landingpage_skroll_-6.jpg"
import img8 from "../../../img/homepage/landingpage_skroll_-7.jpg"
import img9 from "../../../img/homepage/landingpage_skroll_-8.jpg"

const HomeCover = () => {
    const hoverSliderRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            hoverSliderRef.current.classList.remove('animating');
        }, 1000);
        return () => {

        };
    }, []);

    return (
        <Box mt={{ xs: '40px', md: '100px' }} pb={{ xs: '70px', md: '160px' }}>
            <h1 className='visually-hidden'>Male kuće - velike ideje</h1>
            <Flex flexDirection={{ xs: 'column', md: 'row' }} alignItems={{ xs: 'center', md: 'unset' }}>
                <Text fontSize={['32px', null, 'h3', 'h2', 'display1']} maxWidth={[null, '200px']} mt={{ xs: '40px', md: '100px' }} mb={{ xs: '37px', md: 'unset' }}>Male kuće</Text>
                <HoverSlider ref={hoverSliderRef} className='animating'>
                    <HoverImg src={img1} alt="" />
                    <HoverImg src={img2} alt="" />
                    <HoverImg src={img3} alt="" />
                    <HoverImg src={img4} alt="" />
                    <HoverImg src={img5} alt="" />
                    <HoverImg src={img6} alt="" />
                    <HoverImg src={img7} alt="" />
                    <HoverImg src={img8} alt="" />
                    <HoverImg src={img9} alt="" />
                </HoverSlider>
                <Text fontSize={['32px', null, 'h3', 'h2', 'display1']} maxWidth={[null, '200px']} mt={{ xs: '32px', md: 'auto' }} mb={{ md: '100px' }}>velike ideje</Text>
            </Flex>
        </Box>
    );
}

export default HomeCover;
