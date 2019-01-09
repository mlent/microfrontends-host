import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

function asyncComponent({ prefix, loadManifest }) {
  class AsyncComponent extends Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };

    componentWillMount() {
      if (!this.state.Component) {
        loadManifest().then(manifest => {
          const {
            bundle: { js },
            metadata: { componentName }
          } = manifest;
          const script = document.createElement('script');
          script.src = `${prefix}${js}`;
          script.type = 'text/javascript';
          script.onload = () => {
            const Component = window[componentName];
            AsyncComponent.Component = Component;
            this.setState({ Component });
          };
          document.body.appendChild(script);
        });
      }
    }
    render() {
      const { Component } = this.state;
      if (Component) {
        return <Component {...this.props} />;
      }
      return null;
    }
  }
  return AsyncComponent;
}

const Index = asyncComponent({
  prefix: '/fragments/node',
  loadManifest: () =>
    fetch('/fragments/node/manifest.json').then(resp => resp.json())
});

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Index} />
  </Switch>
);

export default Routes;
