import { action, observable } from 'mobx';

const loggedInToken = localStorage.getItem('Meteor.loginToken');

const UserStore = observable(
  {
    loggingIn: Boolean(loggedInToken),
    authenticated: Boolean(loggedInToken),
    user: {},
    setUser(user) {
      this.user = user;
      this.loggingIn = false;
      this.authenticated = true;
    },
    clear() {
      this.loggingIn = false;
      this.user = {};
      this.authenticated = false;
    },
  },
  {
    setUser: action,
    clear: action,
  }
);

export default UserStore;
