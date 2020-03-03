import { Home, Login } from '../pages';

const routes = {
  home: {
    path: '/',
    exact: true,
    type: 'public',
    component: Home,
  },
  login: {
    path: '/login',
    exact: true,
    type: 'public',
    component: Login,
  },
};

export default routes;
