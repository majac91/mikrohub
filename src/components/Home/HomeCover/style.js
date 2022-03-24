import styled, { css, keyframes } from "styled-components";
import { respondTo } from '../../../theme/utils/respondTo';
import { ImgWrapper } from "../../../theme/base/media"

const showImg = keyframes`
    0% { 
        visibility: visible; 
        z-index: 100; 
    }
	12.5% { 
        visibility: visible; 
        z-index: 100; 
    }
	25% { 
        visibility: hidden; 
        z-index: 0; 
    }
    100% { 
        visibility: hidden; 
        z-index: 0; 
    }
`;

export const HoverImg = styled.img`
    top: 0px;
	left: 0px;
	position: absolute;
    height: 100%;
	animation: ${showImg} 1.8s linear infinite 0s forwards;
	animation-play-state: paused;	
    object-fit: cover;
`;

export const HoverSlider = styled(ImgWrapper)`
  	width: 100%;
    max-width: 571px;

    &:before {
        padding-bottom: 119%;
    }
    
    ${respondTo.sm`
    	margin: 0 ${(props) => props.theme.space.s};
    `}
    
    ${respondTo.lg`
    	margin: 0 auto;
    `}

    & ${HoverImg}:nth-of-type(1) {
        z-index: 19;
    }

    & ${HoverImg}:nth-of-type(2) {
        animation-delay: 0.2s;
        z-index: 18;
    }

    & ${HoverImg}:nth-of-type(3) {
        animation-delay: 0.4s;
        z-index: 17;
    }

    & ${HoverImg}:nth-of-type(4) {
        animation-delay: 0.6s;
        z-index: 18;
    }

    & ${HoverImg}:nth-of-type(5) {
        animation-delay: 0.8s;
        z-index: 17;
    }

    & ${HoverImg}:nth-of-type(5) {
        animation-delay: 1s;
        z-index: 16;
    }

    & ${HoverImg}:nth-of-type(6) {
        animation-delay: 1.2s;
        z-index: 15;
    }

    & ${HoverImg}:nth-of-type(7) {
        animation-delay: 1.4s;
        z-index: 14;
    }

    & ${HoverImg}:nth-of-type(8) {
        animation-delay: 1.6s;
        z-index: 13;
    }

    & ${HoverImg}:nth-of-type(9) {
        animation-delay: 1.8s;
        z-index: 12;
    }

    &.animating ${HoverImg}, &:hover ${HoverImg} {
        animation-play-state: running;
    }
`;





