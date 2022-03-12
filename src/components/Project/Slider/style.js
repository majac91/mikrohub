import styled from "styled-components";
import { respondTo } from '../../../theme/utils/respondTo';

import { Swiper, SwiperSlide } from "swiper/react";
import { fontFamily, fontSize, color } from 'styled-system';



export const SliderWrapper = styled.div`
    ${respondTo.md`
        display: flex;
        align-items: center;
    `}
`

export const ImgSlider = styled(Swiper)`
margin-right: -38px;
    ${respondTo.md`
        flex: 0 0 50%;
    `}
`

export const TextSlider = styled(Swiper)`
    display: flex;
    flex-direction: column-reverse;

    ${respondTo.md`
        flex: 0 0 50%;
        margin-left: 30px;
        display: initial;
    `}
`

export const TextSlide = styled.p`
    ${respondTo.md`
        margin-left: auto;
        max-width: 491px;
        text-align: right;
        line-height: 48px;
        font-size: 42px;
    `}

    a {
        text-decoration: underline;
        font-size: inherit;
    }

    ${fontFamily}
    ${color}
`

export const CustomPagination = styled.div`
    counter-reset: slides-counter;
    position: static;
    margin-top: 25px;
    margin-bottom: 25px;

    ${respondTo.md`
        text-align: right;
        margin-top: 50px;
        margin-bottom: unset;
    `}


    &.swiper-pagination-bullets {
        position: static;
        bottom: unset;

    }

    .swiper-pagination-bullet {
        width: unset;
        height: unset;
        display: inline-block;
        border-radius: unset;
        background: unset;
        opacity: 0.2;
        cursor: pointer;
    }

    .swiper-pagination-current, .swiper-pagination-total {
        &:before {            
            content: '0' //fraction leading zero
        }
    }

    .swiper-pagination-bullet-active, .swiper-pagination-current {
        opacity: 1;
        text-decoration: underline;
    }

   .swiper-pagination-bullet {
    counter-increment: slides-counter;
    text-align: right;

        &:before {            
            ${respondTo.md`
                content: counters(slides-counter, " ", decimal-leading-zero);
                font-size: 55px;
                margin-right: 25px;
            `}
        }
   }

${fontFamily}
${fontSize}
${color}
`



