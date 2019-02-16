import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Button = styled('button')`
  ${({ theme }) => css`
    background-color: ${theme.colors.body};
    color: ${theme.colors.text};
    border: 1px solid ${theme.colors.text};
    margin-top: ${theme.spacing.unit * 2}px;
  `};
`;

const ThemeSwitcher = ({ onSetDarkTheme, onSetLightTheme, theme }) => {
  return (
    <div>
      <Button theme={theme} onClick={onSetLightTheme}>
        Light
      </Button>
      <Button theme={theme} onClick={onSetDarkTheme}>
        Dark
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
