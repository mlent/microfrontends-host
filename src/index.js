import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Routes from './routes';

const App = () => (
  <Router>
    <Fragment>
      <nav>
        <Link to="/">Index</Link>
      </nav>
      <section>
        <Routes />
      </section>
    </Fragment>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
