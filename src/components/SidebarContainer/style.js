import styled, { css } from "styled-components";
import { respondTo } from '../../theme/utils/respondTo';
import { Box, Flex } from '../../theme/base/layout';


export const SidebrWrapper = styled.div`
    display: flex;
    position: relative;
`

export const Sidebar = styled.div`
  position: sticky;
  flex: 0 0 40%;
  top: 0;
  align-self: flex-start;
  
  h1 {
      font-size: 200px;
      font-family: 'GraphikRegular';

        ${respondTo.md`
            font-size: 100px;
        `}

        ${respondTo.xl`
            font-size: 140px;
        `}

        ${respondTo.ultraWide`
            font-size: 180px;
        `}
  }
`

export const SidebarContent = styled.div`
    padding-top: 400px;
    max-width: 50%;
    margin-left: auto;

`