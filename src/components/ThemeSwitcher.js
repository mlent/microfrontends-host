import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Button = styled('button')`
  ${({ theme, active }) => css`
    background-color: ${active ? theme.colors.highlight : theme.colors.text};
    color: ${active ? theme.colors.text : theme.colors.body};
    border: 1px solid ${active ? theme.colors.text : theme.colors.body};
    margin-top: ${theme.spacing.unit * 2}px;
  `};
`;

const ThemeSwitcher = ({ onSetTheme, currentTheme }) => {
  return (
    <div>
      <Button
        active={currentTheme === 'light'}
        onClick={() => onSetTheme('light')}
      >
        Light
      </Button>
      <Button
        active={currentTheme === 'dark'}
        onClick={() => onSetTheme('dark')}
      >
        Dark
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
