import styled from "styled-components";
import { color, typography, space, fontSize, flexbox, layout, fontFamily } from "styled-system";
import { respondTo } from "../utils/respondTo";

export const H1 = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-weight: 700;
  letter-spacing: -0.02em;
  ${color};
  ${space};
  ${fontSize};
  ${fontFamily};

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

  ${respondTo.lg`
    font-size: ${(props) => props.theme.fontSizes.h1};
  `}
`;

export const H3 = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.h3};
  font-weight: 700;
  letter-spacing: -0.02em;
  ${color};
  ${space};
  ${space};
  ${fontFamily};
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

`;

export const LinkText = styled.a`
  text-decoration: underline;
  ${space};
  ${fontSize};
  ${fontFamily};
`;