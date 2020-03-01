import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react';
import UserStore from '../../store/user';

const AuthenticatedRoute = observer(({ path, exact, component, location }) => {
  const { authenticated, loggingIn } = UserStore;

  if (authenticated) {
    return (
      <Route
        path={path}
        exact={exact}
        component={loggingIn ? <p>Loading...</p> : component}
      />
    );
  }

  let redirectLocation = '/login';

  return <Redirect to={redirectLocation} />;
});

export default AuthenticatedRoute;
