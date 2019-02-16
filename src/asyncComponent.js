import React, { Component } from 'react';

export default function asyncComponent({ prefix, loadManifest }) {
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
      console.log(this.props);

      if (Component) {
        return <Component {...this.props} />;
      }

      return null;
    }
  }
  return AsyncComponent;
}
