import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';


import { Box, Flex } from '../../../theme/base/layout';
import { TextRight } from '../../../theme/base/typography';
import { CustomPagination } from './style';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import { Controller } from 'swiper';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

const Slider = ({ slides }) => {
    //init modules
    SwiperCore.use([Pagination]);
    SwiperCore.use([Controller]);

    // store controlled swiper instance
    const [controlledSwiper, setControlledSwiper] = useState(null);

    return (
        <Box>
            <Flex>
                <Swiper
                    onSwiper={setControlledSwiper}
                    autoHeight='true'
                >
                    {slides.map((slide, index) => {
                        return <SwiperSlide key={index}>
                            <img src={slide.img} alt="" />
                        </SwiperSlide>
                    })}
                </Swiper>
                <Swiper
                    autoHeight='true'
                    pagination={{
                        clickable: true,
                        type: isMobile ? 'fraction' : 'bullets',
                        el: '.pagination'
                    }}
                    controller={{ control: controlledSwiper }}
                >
                    {slides.map((slide, index) => {
                        return <SwiperSlide key={index}>
                            <TextRight dangerouslySetInnerHTML={{ __html: slide.text }}></TextRight>
                        </SwiperSlide>
                    })}`
                    <CustomPagination fontFamily='GraphikLight' fontSize={[0, '55px']} className='pagination'></CustomPagination>
                </Swiper>
            </Flex>
        </Box>);
}

export default Slider;
