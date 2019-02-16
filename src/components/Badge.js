import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Badge = styled('span')`
  ${({ theme }) => css`
    display: inline-block;
    background-color: ${theme.colors.highlight};
    padding: ${theme.spacing.unit / 2}px ${theme.spacing.unit * 2}px;
    color: ${theme.colors.body};
    border-radius: 10px;
    margin-left: ${theme.spacing.unit}px;
  `};
`;

export default Badge;
