import styled, { css } from "styled-components";
import { H1, H2 } from '../../../theme/base/typography'
import { respondTo } from '../../../theme/utils/respondTo';

export const AboutTitle = styled(H2)`
    display: none;
    width: 100%;
    max-width: 30vw;
    text-transform: uppercase;
    font-size: 70px;
    padding-bottom: 32px;

    ${respondTo.md`
        display: block;
        padding-bottom: unset;
        font-size: 9 0px;
    `}

    ${respondTo.xxl`
        font-size: 130px;
    `}
`

export const AboutText = styled.div`
    margin-left: auto;
    text-align: right;

    ${respondTo.md`
        max-width: 46%;
    `}

    p:not(:first-child) {
        margin-top: 20px;
    }
`