import styled, { css } from "styled-components";
import { respondTo } from '../../theme/utils/respondTo';
import { Box, Flex } from '../../theme/base/layout';


export const SidebrWrapper = styled.div`
    display: flex;
`

export const Sidebar = styled.div`
  position: fixed;
  flex: 0 0 40%;
  padding-top: 150px;
  
  h1 {
      font-size: 200px;
      font-family: 'GraphikRegular';
  }
`

export const SidebarContent = styled.div`
    padding-top: 400px;
    max-width: 50%;
    margin-left: auto;

`