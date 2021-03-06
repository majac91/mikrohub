import styled from "styled-components";
import { color, typography, maxWidth, space, fontSize, flexbox, layout, fontFamily, textAlign, whiteSpace } from "styled-system";
import { respondTo } from "../utils/respondTo";
import { Link } from 'react-router-dom';

export const H1 = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-weight: 700;
  letter-spacing: -0.02em;

  ${color};
  ${space};
  ${fontSize};
  ${fontFamily};
  ${textAlign};

  ${respondTo.lg`
    font-size: ${(props) => props.theme.fontSizes.h1};
  `}
`;

export const H2 = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.h4};
  font-weight: 700;
  letter-spacing: -0.02em;

  ${color};
  ${space};
  ${fontSize};
  ${fontFamily};
  ${textAlign};

  ${respondTo.lg`
    font-size: ${(props) => props.theme.fontSizes.h1};
  `}
`;

export const H3 = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.h3};
  font-weight: 700;
  letter-spacing: -0.02em;

  ${respondTo.xl`
    white-space: nowrap;
  `}

  ${color};
  ${space};
  ${layout};
  ${fontSize};
  ${fontFamily};
  ${textAlign};
`;

export const Text = styled.p`

  ${typography};
  ${color};
  ${space};
  ${flexbox};
  ${layout};
  ${fontFamily};
  ${fontSize};
  ${textAlign};
`;

export const InlineLink = styled.a`
  text-decoration: underline;
  display: inline-block;

  ${space};
  ${fontSize};
  ${fontFamily};
  ${textAlign};
  ${layout}
`;

export const TextLink = styled(Link)`
  text-decoration: underline;
  display: inline-block;

  ${space};
  ${fontSize};
  ${fontFamily};
  ${textAlign};
  ${layout}
`;

export const TextLeft = styled.div`
  text-align: left;
  font-family: 'GraphikLight';

  ${fontSize};
  ${fontFamily};
  ${maxWidth}
  ${layout}
  ${space}
`

export const TextRight = styled.div`
  font-family: 'GraphikLight';
  text-align: ${(props => props.fixed ? 'right' : 'left')};

  ${respondTo.lg`
      text-align: right;
  `}

  ${fontSize};
  ${fontFamily};
  ${maxWidth}
  ${layout}
  ${space}
`



export const OrderedListWrapper = styled.ol`
  counter-reset: slides-counter;

  li: {
    margin-bottom: 0!important;
  }

  ${fontSize};
  ${fontFamily};
  ${maxWidth}
  ${layout}
  ${space}
`

export const OrderedListItem = styled.li`
  counter-increment: slides-counter;
  
  &:before {   
    content: counter(slides-counter, decimal-leading-zero) ".";
    font-size: 24px;
    min-width: 40px;
    margin-right: 15px;
    opacity: 0.2;
    margin-right: '30px'

      ${respondTo.md`
            font-size: 60px;
            padding: 0 12px;
      `}

      ${respondTo.lg`
            font-size: 60px;
            padding: 0 12px;
      `}

      ${respondTo.xxl`
          font-size: 100px;
          margin-right: '30px'
      `}
  }

  ${fontSize};
  ${fontFamily};
  ${maxWidth}
  ${layout}
  ${space}
`