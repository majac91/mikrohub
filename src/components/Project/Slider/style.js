import styled from "styled-components";
import { respondTo } from '../../../theme/utils/respondTo';

import { Swiper, SwiperSlide } from "swiper/react";
import { fontFamily, fontSize } from 'styled-system';


export const CustomPagination = styled.div`
    counter-reset: slides-counter;
    position: initial;

    ${respondTo.md`
        // font-size: 55px;
        margin-left: 25px;
    `}

    .swiper-pagination-bullet {
        width: unset;
        height: unset;
        display: inline-block;
        border-radius: unset;
        background: unset;
        opacity: 0.2;
        cursor: pointer;

            &-active {
                opacity: 1;
                text-decoration: underline;
            }
        }


   .swiper-pagination-bullet {
    counter-increment: slides-counter;
    text-align: right;

        &:before {            
            ${respondTo.md`
                content: counters(slides-counter, " ", decimal-leading-zero);

            `}
        }

        ${respondTo.md`
            font-size: 55px;
            margin-left: 25px;
        `}
   }

${fontFamily}
${fontSize}

`