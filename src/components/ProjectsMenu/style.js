import styled, { css } from "styled-components";
import { respondTo } from '../../theme/utils/respondTo';
import { Link } from 'react-router-dom'
import { space } from 'styled-system';

import darkforestImg from '../../img/projects-menu/darkforest.png'
import ashwoodImg from '../../img/projects-menu/ashwood.png'
import ruralImg from '../../img/projects-menu/rural.png'
import urbanImg from '../../img/projects-menu/urban.png'

export const ProjectMenuWrapper = styled.div`
    position: fixed;
    overflow: auto;
    top: 0;
    left: 0;
    z-index: 1002;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.white};

    &&.closed {
    display: none;
}

    ${space}
`

export const ProjectLink = styled(Link)`
    position: relative;
    max-width: 146px;
    font-size: 32px;
    text-transform: capitalize;

    ${respondTo.lg`
        max-width: 321px;
        font-size: 80px;
    `}

    &::after {
        content: '';
        position: absolute;
        opacity: 0;
        transition: opacity .2s ease-in-out;
        pointer-events: none;
    }

    &:hover {
        &::after {
            opacity: 1;
        }  
    }

    ${space}
    `


export const DarkForestLink = styled(ProjectLink)`
    &::after {
        top: 0;
        left: 45vw;
        background: url(${darkforestImg}) no-repeat center center/cover;;
        width: 446px;
        height: 446px;
    }

    ${space}
`


export const AshwoodLink = styled(ProjectLink)`
    &::after {
        top: 0;
        left: 35vw;
        background: url(${ashwoodImg}) no-repeat center center/cover;;
        width: 399px;
        height: 399px;;
    }

    ${space}
`

export const RuralLink = styled(ProjectLink)`
    &::after {
        bottom: -30%;
        left: 55vw;
        background: url(${ruralImg}) no-repeat center center/cover;;
        width: 399px;
        height: 399px;
    }
`


export const UrbanLink = styled(ProjectLink)`
    &::after {
        bottom: 0;
        left: 35vw;
        background: url(${urbanImg}) no-repeat center center/cover;;
        width: 446px;
        height: 446px;
    }
`