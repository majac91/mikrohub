import { css } from 'styled-components';

export const breakpoint = {
  xs: '480px',
  sm: '568px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1500px'
};

export const respondTo = Object.keys(breakpoint).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoint[label]}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);