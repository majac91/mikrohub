
import styled, { css } from "styled-components";
import { respondTo } from '../../theme/utils/respondTo';
import fonts from '../../fonts/fonts';
import { Link } from 'react-router-dom'
import { layout, space } from "styled-system";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding-top: ${(props) => props.theme.space.lg};
`;

export const Logo = styled.div` 
    font-size: 32px;
    font-family: ${fonts.bold};
    z-index: 10;
    
    span {
        display: inline-block;
        overflow:hidden;
    }
`;

export const NavMenu = styled.ul`
    position: absolute;
    right: -${(props) => props.theme.space.lg};
    left: -${(props) => props.theme.space.lg}; 
    top: 0;
    bottom: 0;
    min-height: 100vh;
    flex-direction: column;
    padding: 90px ${(props) => props.theme.space.lg};
    transition: transform 1s ease;
    transition-delay: 0.5s;
    transform: translateX(-100%);
    background: white;
    z-index: 101;

    ${respondTo.md`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: initial;
        top: 0;
        background: unset;
        min-height: unset;
        padding: unset;
        transform: unset!important;
import { layout } from 'styled-system';

    `}

    ${(props) => {
        switch (props.$mode) {
            case "open":
                return css`
                transform: translateX(0);
                overflow: hidden;

                ${NavLink} {
                    transform: translateY(0);
                }
        `;
        }
    }}
`;

export const NavItem = styled.li`
    display: flex;
    margin-bottom: ${(props) => props.theme.space.md};
    text-transform: lowercase;
    font-family: ${fonts.light};
    font-size: 32px;
    overflow: hidden;

    ${respondTo.md`
        margin-bottom: unset;
        
        &:not(:last-of-type) {
        margin-right: ${(props) => props.theme.space.md};
        }
    `}
`;

export const NavLink = styled(Link)`
    transition: transform 1s ease;
    transition-delay: 1s;
    transform: translateY(100%);

    ${respondTo.md`
        transform: unset;
    `}
`;

export const Burger = styled.button`
    position: absolute;
    right: 0;
    top: ${(props) => props.theme.space.xl};
    z-index: 2; 
    width: 29px;
    height: 30px;
    cursor: pointer;
    z-index: 102;

    ${respondTo.md`
        display: none;
    `};

    ${(props) => {
        switch (props.$menu) {
            case "projects-menu":
                return css`
                    z-index: 103;
                    right: 38px;

                    ${respondTo.md`
                    display: block;
                    `};

                `;
        }
    }}

    ${layout}
    ${space}
`;

export const Bars = styled.span`
    &:before, &:after {
        content: '';
        width: 100%;
        height: 2px;
        background-color: black;
        position: absolute;
        right: 0;
        transition: transform .4s ease;
    }

    &:before {
        top: 0;
    }

    &:after {
        top: 8px;
    }

    ${(props) => {
        switch (props.$mode) {
            case "open":
                return css`
                
                &:before {
                    transform: rotate(45deg);
                }

                &:after {
                    transform: rotate(-45deg);
                    top: 0;
                }
        `;
        }
    }}
`;