
import { respondTo } from '../../utils/respondTo';
import styled, { css } from "styled-components";
import fonts from '../../theme/fonts';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding-top: ${(props) => props.theme.spaces.lg};
`;

export const Logo = styled.div` 
    font-size: 32px;
    font-family: ${fonts.bold};
    /* display: flex; */
    span {
        display: inline-block;
        overflow:hidden;
    }
`;

export const NavMenu = styled.ul`
    flex-direction: column;
    position: absolute;
    right: -${(props) => props.theme.spaces.lg};
    left: -${(props) => props.theme.spaces.lg}; 
    top: 0;
    bottom: 0;
    background: white;
    min-height: 100vh;
    padding: 90px ${(props) => props.theme.spaces.lg};
    transform: translateX(-100%);


    ${respondTo.md`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: unset;
        // right: -100%;
        top: 0;
        background: unset;
        min-height: unset;
        padding: unset;
        transform: unset!important;

    `}
`;

export const NavItem = styled.li`
    display: flex;
    margin-bottom: ${(props) => props.theme.spaces.md};
    text-transform: lowercase;
    font-family: ${fonts.light};
    font-size: 32px;
    overflow: hidden;
    
    a { 
        transform: translateY(0);
    }
    
    ${respondTo.md`
        &:not(:last-of-type) {
            margin-right: ${(props) => props.theme.spaces.md};
        }
        margin-bottom: unset;
    `}
`;

export const Burger = styled.button`
    position: absolute;
    right: ${(props) => props.theme.spaces.lg};
    top: ${(props) => props.theme.spaces.xl};
    z-index: 2; 
    width: 29px;
    height: 30px;
    cursor: pointer;
        ${respondTo.md`
            display: none;
        `};
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