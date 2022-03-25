import { respondTo } from '../utils/respondTo';
import styled from "styled-components";
import { space, layout, color, flexbox, textAlign, position } from 'styled-system'

export const Box = styled.section`
    max-width: calc(100vw - 76px);
    margin: auto;
    
    ${respondTo.md`
        max-width: calc(100vw - 110px);
    `}
    ${respondTo.xl`
            max-width: calc(100vw - 220px);
    `}
    ${respondTo.xxl`
            max-width: calc(100vw - 540px);
    `}
    ${space}
    ${layout}
    ${color}
    ${textAlign}
    ${position}
`;

export const PageWrapper = styled(Box)`
    min-height: 70vh;
`;

export const DarkBox = styled.div`
    background-color: ${(props) => props.theme.colors.text};
    color: white;
    
    ${space}
`

export const Flex = styled.div`
	display: flex;

    ${flexbox}
    ${layout}
    ${space}
    ${position}
`;


export const Wrapper = styled.div`
    ${flexbox}
    ${layout}
    ${space}
    ${color}
`;