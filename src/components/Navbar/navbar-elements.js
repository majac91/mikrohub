
import { respondTo } from '../../utils/respondTo';
import styled, { css } from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    position: relative;

    &.open ul {
        right: 0;
        left: 0;
    }
`;

export const Logo = styled.a` 
`;

export const NavMenu = styled.ul`
    display: flex;
    position: absolute;
    right: -100%;
    top: 0;
    min-height: 100vh;
    background: white;
    padding: ${(props) => props.theme.spaces.lg};
    flex-direction: column;
        ${respondTo.md`
            flex-direction: row;
            justify-content: space-between;
            background: unset;
            min-height: unset;
            position: unset;

        `}
`;

export const NavItem = styled.li`
    display: flex;
    text-transform: lowercase;
    margin-bottom: ${(props)=> props.theme.spaces.md};

    ${respondTo.md`
        margin-right: ${(props)=> props.theme.spaces.md}
    `}
`;

export const Burger = styled.button`
    position: absolute;
    right: ${(props) => props.theme.spaces.lg};
    top: ${(props) => props.theme.spaces.lg};
    z-index: 2; 
    width: 29px;
    height: 100%;
        ${respondTo.md`
            display: none;
        `}
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