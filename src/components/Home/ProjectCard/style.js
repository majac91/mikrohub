import styled from 'styled-components';
import { Wrapper } from '../../../theme/base/layout';
import { color, space, fontSize, flexbox, layout, fontFamily } from "styled-system";
import { respondTo } from '../../../theme/utils/respondTo';


export const PictureCardWrapper = styled(Wrapper)`
  display: none;

  ${respondTo.lg`
      display: block;
      position: relative;
  `}
`;


export const VerticalText = styled.p`
  writing-mode: vertical-rl;
  ${color};
  ${fontSize};
  ${space};
  ${layout};
`;

export const ScrollingLetter = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transform: translateX(-30%);
  font-size: ${(props) => props.theme.fontSizes.display2};
  ${fontSize};
  ${color};
  ${fontFamily}
`;