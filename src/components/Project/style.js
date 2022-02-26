import styled, { css } from "styled-components";
import { H1, H2 } from '../../theme/base/typography'
import { respondTo } from '../../theme/utils/respondTo';
import { ImgWrapper } from "../../theme/base/media.js"

export const ProjectCoverWrapper = styled.div`
    max-height: 90vh;
    height: max-content;
    width: 100%;
    position: relative;
    overflow-y: clip;

    &:after {
        content: '';
        width: 100%;
        height: 100%;
        z-index: 1;
        color: ${(props) => props.theme.colors.black};
        opacity: 0.2;
        position: absolute;
        top: 0;
    }
`

export const ProjectTitle = styled(H1)`
    width: 100%;
    max-width: 50vw;
    text-transform: uppercase;
    font-size: 70px;
    padding-left: 30px;
    padding-bottom: 32px;

    ${respondTo.md`
        max-width: unset;
        margin: auto;
        position: absolute;
        bottom: 0;
        z-index: 2;
        color: ${(props) => props.theme.colors.white};
        text-align: center;
        padding-bottom: unset;
        padding-left: unset;
        font-size: 113px;

    `}

    /* ${respondTo.lg`
       font-size: 113px;
    `} */

    ${respondTo.ultraWide`
       line-height: 0.5;
       white-space: nowrap;
       font-size: 143px;
    `}


    span {
        width: 100%;
        display: inline-block;
        margin: auto;
        text-align: left;

        ${respondTo.md`
        max-width: calc(100vw - 110px);
        `}
        ${respondTo.lg`
                max-width: calc(100vw - 220px);
        `}
        ${respondTo.xl`
            max-width: calc(100vw - 220px);
        `}
        ${respondTo.xxl`
                max-width: calc(100vw - 540px);
        `}
    }
`

export const ProjectImgWrapper = styled(ImgWrapper)`
    position: relative;

    &:before {
        content: '';
        padding-bottom: 85%;
    }

    ${respondTo.md`
        margin-top: -81px;
        &:before {
            content: '';
            padding-bottom: 50%;
        }
    `}
`


export const AboutTitle = styled(H2)`
    width: 100%;
    max-width: 30vw;
    text-transform: uppercase;
    font-size: 70px;
    padding-bottom: 32px;

    ${respondTo.md`
        padding-bottom: unset;
    `}

    ${respondTo.xxl`
        font-size: 143px;
        // padding-left: 30px;
    `}
`
