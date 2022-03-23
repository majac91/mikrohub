import styled from "styled-components";
import { H1 } from '../../../theme/base/typography'
import { respondTo } from '../../../theme/utils/respondTo';
import { ImgWrapper } from "../../../theme/base/media.js"

export const ProjectCoverWrapper = styled.div`
    max-height: 90vh;
    height: max-content;
    width: 100%;
    position: relative;
    overflow-y: clip;
    margin-top: 43px;

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

    ${respondTo.md`
        margin-top: unset;
    `}
`

export const ProjectTitle = styled(H1)`
    width: 100%;
    max-width: 52%;
    text-transform: uppercase;
    font-size: 70px;
    padding-left: 30px;
    padding-bottom: 32px;

    ${respondTo.md`
        position: absolute;
        bottom: 0;
        z-index: 2;
        color: ${(props) => props.theme.colors.white};
        text-align: center;
        padding-bottom: unset;
        padding-left: unset;
        font-size: 113px;
        right: 55px;
        left: 55px;
    `}

    ${respondTo.xl`
        right: 110px;
        left: 110px;
    `}

    ${respondTo.xxl`
        right: 270px;
        left: 270px;
        white-space: nowrap;
        font-size: 130px;
        line-height: 0.5;
    `}
    
    span {
        width: 100%;
        display: inline-block;
        margin: auto;
        text-align: left;
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
