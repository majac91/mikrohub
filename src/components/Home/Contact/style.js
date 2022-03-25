import styled, { css, keyframes } from "styled-components";
import { respondTo } from '../../../theme/utils/respondTo';
import { space, variant, fontSize, textAlign, position, flexbox, layout } from "styled-system";
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
            lightItalic: {
                fontFamily: 'GraphikExtralightItalic',
            },
            italic: {
                fontFamily: 'GraphikRegularItalic',
            },
            bold: {
                fontFamily: 'GraphikBold',
                textDecoration: 'underline',
            },
            boldNoUnderline: {
                fontFamily: 'GraphikBold',
            }
        }
    })
);

export const RegularLink = styled(LinkVariants)`
    margin-bottom: 15px;
    font-size: 32px;
    white-space: nowrap;

    ${respondTo.md`
        font-size: 60px;
    `}

    ${respondTo.xxl`
        font-size: 70px;
    `}

    ${respondTo.ultraWide`
        font-size: 100px;
    `}

    ${space}
    ${space}
    ${fontSize}
    ${textAlign}
`

export const ProjectsLink = styled.div`
    margin-bottom: 15px;
    font-size: 32px;
    white-space: nowrap;
    cursor: pointer;

    ${respondTo.md`
        font-size: 60px;
    `}

    ${respondTo.xxl`
        font-size: 70px;
    `}

    ${respondTo.ultraWide`
        font-size: 100px;
    `}

    ${space}
    ${space}
    ${fontSize}
    ${textAlign}
`

export const AnimatedLink = styled(RegularLink)`
        /* &:after {
            position: absolute;
            bottom: 0;
            left: 0;
            content: '';
            width: 0;
            height: 2px;
        } */

    &&.anim-start {
        animation: ${animateFont1} 2s linear forwards;
        /* &:after {
            width: 100%;
            background-color: black;
        } */
    }
    ${position}
`;

export const ContactLink = styled.a`
        font-family: 'GraphikBold';
        text-decoration: underline;
        font-size: 40px;
        display: block;
        margin: auto;
        text-align: center;

        ${respondTo.lg`
            font-size: 70px;
        `}

        ${respondTo.xxl`
            font-size: 100px;
        `}

    ${space}
    ${flexbox}
    ${layout}
`

