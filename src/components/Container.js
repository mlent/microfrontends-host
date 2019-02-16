import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Container = styled('div')`
  ${({ theme }) => css`
    width: 33%;
    display: flex;
    position: relative;
    color: ${theme.colors.text};
    border: ${theme.border.width}px solid ${theme.colors.text};
    background-color: ${theme.colors.body};
    padding: ${theme.spacing.unit * 5}px;
    width: 800px;
    margin: 0 auto;
  `};
`;

export default Container;
