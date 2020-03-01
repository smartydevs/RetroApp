import UserStore from './';

export const refreshStore = function(token) {
  if (!token) {
    UserStore.clear();
    return;
  }

  // apolloClient
  //   .query({ query: getMyProfileQuery, fetchPolicy: 'network-only' })
  //   .then(response => {
  //     const { me } = response.data;
  //     UserStore.setUser(me);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     UserStore.clear();
  //   });
};
