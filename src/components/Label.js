import { css } from '@emotion/core';
import styled from '@emotion/styled';

const Label = styled('div')`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    right: 0;
    color: ${theme.colors.body};
    background-color: ${theme.colors.text};
    padding: ${theme.spacing.unit}px ${theme.spacing.unit * 2}px;
  `};
`;

export default Label;
