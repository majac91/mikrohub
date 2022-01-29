import { respondTo } from '../utils/respondTo';
import styled, { css } from "styled-components";

export const Box = styled.div`
    max-width: calc(100vw - 76px);
    margin: auto;
    ${respondTo.md`
        max-width: calc(100vw - 110px);
    `}
    ${respondTo.lg`
            max-width: calc(100vw - 220px);
    `}
    ${respondTo.xl`
            max-width: calc(100vw - 540px);
    `}
`;

export const Flex = styled.div`
	display: flex;
`;