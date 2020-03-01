import { onTokenChange } from 'meteor-apollo-accounts';
import { refreshStore } from './refresh';
import client from '../../services/apollo';

onTokenChange(({ token }) => {
  // for resetting the apollo client's store on log-in/logout
  client.resetStore().then(() => {
    refreshStore(token);
  });
});

const currentToken = localStorage.getItem('Meteor.loginToken');
refreshStore(currentToken);
