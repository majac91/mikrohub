import { variant } from 'styled-system'
import styled, { css, keyframes } from "styled-components";
import { respondTo } from '../../../theme/utils/respondTo';
import { color, space, fontSize, layout, fontFamily, position } from "styled-system";
import { Link } from 'react-router-dom'


const animateFont1 = keyframes`
    0% { 
        font-family: 'GraphikBold'; 
    }
	10% { 
        font-family: 'GraphikExtralight';
    }
	20% { 
        font-family: 'GraphikMediumItalic'; 
    }
    30% { 
        font-family: 'GraphikSemibold'; 
    }
    40% { 
        font-family: 'GraphikThin'; 
    }
    50% { 
        font-family: 'GraphikLight'; 
    }
    60% { 
        font-family: 'GraphikBold'; 
    }
    70% { 
        font-family: 'GraphikLightItalic'; 
    }
    80% { 
        font-family: 'GraphikRegularItalic'; 
    }
    90% { 
        font-family: 'GraphikSemibold'; 
    }
    100% { 
        font-family: 'GraphikBold'; 
    }
`;



export const LinkVariants = styled(Link)(
    variant({
        variants: {
            light: {
                fontFamily: 'GraphikThin',
            },
            italic: {
                fontFamily: 'GraphikRegularItalic',
            },
            bold: {
                fontFamily: 'GraphikBold',
                textDecoration: 'underline',
            },
        }
    })
);

export const RegularLink = styled(LinkVariants)`
    margin-bottom: 15px;
    font-size: 32px;
    white-space: nowrap;

    ${respondTo.lg`
        font-size: 100px;
    `}

    ${respondTo.xxl`
        margin-bottom: 37px;
        font-size: 180px;
    `}
    ${space}
`

export const AnimatedLink = styled(RegularLink)`
    &&.anim-start {
        animation: ${animateFont1} 2s linear forwards;
    }
`;

