import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Button from './Button';

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
