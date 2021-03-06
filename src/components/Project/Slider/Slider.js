import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';


import { Box } from '../../../theme/base/layout';
import { SliderWrapper, ImgSlider, CustomPagination, TextSlider, TextSlide } from './style';

import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import { Controller } from 'swiper';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import { ImgWrapper } from '../../../theme/base/media';

const Slider = ({ slides, aspect }) => {

    //init modules
    SwiperCore.use([Pagination]);
    SwiperCore.use([Controller]);

    // store controlled swiper instance
    const [controlledSwiper, setControlledSwiper] = useState(null);

    return (
        <Box pt={{ xs: '50px', md: '119px' }} pb={{ xs: '50px', md: '141px' }}>
            <SliderWrapper>
                <ImgSlider className='imgSlider'
                    onSwiper={setControlledSwiper}
                    autoHeight='true'
                    noSwiping='true'
                    breakpoints={{
                        768: {
                            slidesPerView: 1,
                            noSwipingClass: 'imgSlider'
                        },
                        0: {
                            slidesPerView: 1.3,
                            spaceBetween: 60
                        },
                    }}
                >
                    {slides.map((slide, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <ImgWrapper aspect={aspect}>
                                    <img src={slide.img} alt="" />
                                </ImgWrapper>
                            </SwiperSlide>
                        )
                    })}
                </ImgSlider>
                <TextSlider

                    keyboard='true'
                    pagination={{
                        clickable: true,
                        type: isMobile ? 'fraction' : 'bullets',
                        el: '.pagination'
                    }}
                    controller={{ control: controlledSwiper }}
                >
                    {slides.map((slide, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <TextSlide fontFamily='GraphikLight' color='text' dangerouslySetInnerHTML={{ __html: slide.text }} />
                            </SwiperSlide>
                        )
                    })}
                    <CustomPagination fontFamily='GraphikLight' fontSize={{ xxs: '24px', md: '34px', xxl: '55px' }} color='text' className='pagination'></CustomPagination>
                </TextSlider>
            </SliderWrapper>
        </Box>

    );
}

export default Slider;
