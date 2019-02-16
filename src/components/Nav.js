import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Nav = styled('nav')`
  ${({ theme }) => css`
    background-color: ${theme.colors.body};
    border: ${theme.border.width}px dashed ${theme.colors.text};
    padding: ${theme.spacing.unit * 3}px;
    margin-right: ${theme.spacing.unit * 3}px;
    width: 33%;

    a,
    a:hover,
    a:visited {
      color: ${theme.colors.highlight};
    }
  `};
`;

export default Nav;
