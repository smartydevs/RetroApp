import React from 'react';
import _ from 'lodash';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import apolloClient from './services/apollo';
import { appRoutes, RouteActions, routeTypes } from './routing';
import { NavBar } from './components';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      {/*<ToastContainer position={toast.POSITION.TOP_RIGHT} autoClose={5000} closeOnClick />*/}
      <BrowserRouter>
        <NavBar />
        <RouteActions>
          {_.map(appRoutes, (route, index) => {
            const RouteComponent = routeTypes[route.type];
            if (RouteComponent) {
              return (
                <RouteComponent
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              );
            }
          })}
        </RouteActions>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
