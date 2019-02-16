import React, { useState, Component } from 'react';
import { ThemeProvider } from 'emotion-theming';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Global } from '@emotion/core';

import { light, dark } from './themes';
import globalStyles from './global';
import asyncComponent from './asyncComponent';

import ThemeSwitcher from './components/ThemeSwitcher';
import Container from './components/Container';
import Nav from './components/Nav';

const Index = asyncComponent({
  prefix: '/fragments/node',
  loadManifest: () =>
    fetch('/fragments/node/manifest.json').then(resp => resp.json())
});

const App = () => {
  const [theme, setTheme] = useState(light);

  return (
    <Router>
      <>
        <Global styles={globalStyles} />
        <Container theme={theme}>
          <Nav theme={theme}>
            <h3>Menu</h3>
            <Link to="/">Index</Link>
            <ThemeSwitcher
              theme={theme}
              onSetLightTheme={() => setTheme(light)}
              onSetDarkTheme={() => setTheme(dark)}
            />
          </Nav>
          <section>
            <Switch>
              <Route exact path="/" component={Index} />
            </Switch>
          </section>
        </Container>
      </>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
