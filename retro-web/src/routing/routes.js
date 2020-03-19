import { Home, Login, Register } from '../pages';

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
  register: {
    path: '/register',
    exact: true,
    type: 'public',
    component: Register,
  },
};

export default routes;
