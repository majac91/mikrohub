import { space, layout } from 'styled-system'

import styled from "styled-components";

export const ImgWrapper = styled.picture`
    position: relative;
    overflow: hidden;
    display: block;
    width: 100%;

    &:before {
        content: '';
        display: block;
        padding-bottom: ${(props) => props.aspect};
    }

    > img {
    bottom: -9999px;
    left: -9999px;
    margin: auto;
    max-width: none;
    min-width: 100%;
    position: absolute;
    right: -9999px;
    top: -9999px;
    width: auto;
    height: 100%;
  }

  > img {
    object-fit: cover;
  }

  ${space}
  ${layout}
`;

