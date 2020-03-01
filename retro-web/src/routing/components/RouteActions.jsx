import React, { Component } from 'react';
import { withRouter, Switch } from 'react-router';

class RouteActions extends Component {
  componentDidUpdate(prevProps) {
    const { location } = this.props;

    if (location.pathname !== prevProps.location.pathname) {
      // this.setRouteClass(prevProps.location, location);
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;

    return <Switch>{children}</Switch>;
  }
}
export default withRouter(RouteActions);
