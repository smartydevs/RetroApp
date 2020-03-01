import { Route } from 'react-router';
import AuthenticatedRoute from './components/AuthenticatedRoute';

const routeTypes = {
  authenticated: AuthenticatedRoute,
  public: Route,
};

export default routeTypes;
