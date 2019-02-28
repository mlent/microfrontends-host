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
import Badge from './components/Badge';
import Main from './components/Main';
import Button from './components/Button';
import Label from './components/Label';

/*
 * Generate a component that will async fetch the module
 * when it gets rendered.
 */
const MyFragment = asyncComponent({
  prefix: '/fragments/node',
  loadManifest: () =>
    fetch('/fragments/node/manifest.json').then(resp => resp.json())
});

const App = () => {
  const [theme, setTheme] = useState(light);
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);

  return (
    <Router>
      <>
        <Container theme={theme}>
          <Label theme={theme}>host</Label>
          <Nav theme={theme}>
            <h3>
              Menu <Badge theme={theme}>{counter}</Badge>
            </h3>
            <Link to="/">Fragment</Link>
            <br />
            <Button theme={theme} onClick={incrementCounter}>
              Increment
            </Button>
            <ThemeSwitcher
              theme={theme}
              onSetLightTheme={() => setTheme(light)}
              onSetDarkTheme={() => setTheme(dark)}
            />
          </Nav>
          <Main>
            <Switch>
              <Route
                exact
                path="/"
                component={props => (
                  <MyFragment
                    counter={counter}
                    onIncrementCounter={incrementCounter}
                    theme={theme}
                    {...props}
                  />
                )}
              />
            </Switch>
          </Main>
        </Container>
        <Global styles={globalStyles} />
      </>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
