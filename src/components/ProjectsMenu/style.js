import styled, { css } from "styled-components";
import { respondTo } from '../../theme/utils/respondTo';
import { Link } from 'react-router-dom'
import { space } from 'styled-system';

export const ProjectMenuWrapper = styled.div`
    position: fixed;
    overflow: auto;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.white};

    &&.closed {
    display: none;
}

    ${space}
`

export const ProjectLink = styled(Link)`
    max-width: 146px;
    font-size: 32px;
    text-transform: capitalize;

    ${respondTo.lg`
        max-width: 321px;
        font-size: 80px;
    `}

    ${space}
        `