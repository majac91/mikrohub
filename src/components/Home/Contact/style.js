import { variant } from 'styled-system'
import styled, { css, keyframes } from "styled-components";
import { respondTo } from '../../../theme/utils/respondTo';
import { space, fontSize, layout, flex } from "styled-system";
import { Link } from 'react-router-dom'


export const LinkWrapper = styled.div`
     position: absolute;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     margin: auto;
     height: max-content;
     display: flex;
     flex-direction: column;

    ${space}
`

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

    ${space}
    ${fontSize}
`

export const AnimatedLink = styled(RegularLink)`
    &&.anim-start {
        animation: ${animateFont1} 2s linear forwards;
    }
`;

