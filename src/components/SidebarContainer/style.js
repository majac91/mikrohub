import styled, { css } from "styled-components";
import { respondTo } from '../../theme/utils/respondTo';


export const SidebrWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;

    ${respondTo.lg`
        flex-direction: row;
    `}
`

export const Sidebar = styled.div`
    position: sticky;
    top: 0;
    align-self: flex-start;

    ${respondTo.lg`
        flex: 0 0 40%;
    `}
  
    h1 {
        font-size: 70px;
        font-family: 'GraphikRegular';

            ${respondTo.md`
                font-size: 90px;
            `}

            ${respondTo.lg`
                font-size: 100px;
            `}
            
            ${respondTo.xxl`
                font-size: 120px;
            `}

            ${respondTo.ultraWide`
                font-size: 180px;
            `}
    }
`

export const SidebarContent = styled.div`
    margin-left: auto;

    ${respondTo.md`
        padding-top: 30px;
        max-width: 58%;
        padding-top: 100px;
    `}

    ${respondTo.lg`
        padding-top: 200px;
    `}

    ${respondTo.xxl`
        max-width: 54%;
        padding-top: 400px;
    `}

    ${respondTo.ultraWide`
        max-width: 50%;
    `}
`