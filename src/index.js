import React, { useState, Component } from 'react';
import { ThemeProvider } from 'emotion-theming';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Global } from '@emotion/core';

import { light, dark } from './themes';
import globalStyles from './global';
import Routes from './routes';
import ThemeSwitcher from './components/ThemeSwitcher';
import Container from './components/Container';
import Nav from './components/Nav';

const themes = { light, dark };

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <Router>
      <ThemeProvider theme={themes[theme]}>
        <Global styles={globalStyles} />
        <Container>
          <Nav>
            <h3>Menu</h3>
            <Link to="/">Index</Link>
            <ThemeSwitcher onSetTheme={setTheme} currentTheme={theme} />
          </Nav>
          <section>
            <Routes />
          </section>
        </Container>
      </ThemeProvider>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
