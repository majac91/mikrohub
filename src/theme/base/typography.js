import styled from "styled-components";
import { color, typography, maxWidth, space, fontSize, flexbox, layout, fontFamily, textAlign, whiteSpace } from "styled-system";
import { respondTo } from "../utils/respondTo";

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
  font-size: ${(props) => props.theme.fontSizes.p};

  ${typography};
  ${color};
  ${space};
  ${flexbox};
  ${layout};
  ${fontFamily};
  ${fontSize};
  ${textAlign};
`;

export const LinkText = styled.a`
  text-decoration: underline;
  display: block;

  ${space};
  ${fontSize};
  ${fontFamily};
  ${textAlign};
`;

export const TextLeft = styled.p`
  text-align: left;
  font-family: 'GraphikLight';

  ${fontSize};
  ${fontFamily};
  ${maxWidth}
  ${layout}
  ${space}
`

export const TextRight = styled.p`
  font-family: 'GraphikLight';

  ${respondTo.lg`
      text-align: right;
  `}

  ${fontSize};
  ${fontFamily};
  ${maxWidth}
  ${layout}
  ${space}

`