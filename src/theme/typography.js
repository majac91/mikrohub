import styled from "styled-components";
import { color, typography, space, fontSize } from "styled-system";
import fonts from "./fonts";

export const H1 = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.h1};
  font-family: ${fonts.regular};
  font-weight: 700;
  letter-spacing: -0.02em;
  ${color};
  ${space};
  ${fontSize};
`;

export const H2 = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.h2};
  font-weight: 700;
  letter-spacing: -0.02em;
  ${color};
  ${space};
`;

export const H3 = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.h3};
  font-weight: 700;
  letter-spacing: -0.02em;
  ${color};
  ${space};
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.fontSizes.p};
  ${typography};
  ${color};
  ${space};
`;

// export const PreTitle = styled.span`
//   font-weight: 700;
//   font-size: ${(props) => props.theme.fontSizes.extraSmall};
//   text-transform: uppercase;
//   color: ${(props) => props.theme.colors.text};
//   letter-spacing: 0.03em;
//   display: inline-block;
//   ${space};
// `;

// export const ButtonText = styled.span`
//   font-weight: 700;
//   font-size: ${(props) => props.theme.fontSizes.medium};
//   text-transform: uppercase;
//   color: ${(props) => props.theme.colors.dark};
//   letter-spacing: 0.03em;
//   display: inline-block;
// `;

// export const LinkText = styled.span`
//   font-weight: 700;
//   font-size: ${(props) => props.theme.fontSizes.medium};
//   text-decoration: underline;
//   color: ${(props) => props.theme.colors.secondary};
//   letter-spacing: 0.03em;
//   display: inline-block;
//   ${space};
// `;