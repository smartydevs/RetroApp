import { initAccounts } from 'meteor/cultofcoders:apollo-accounts';
import { load } from 'graphql-load';

import './db';
import './entities';
import './actions';

const AccountModules = initAccounts({
  loginWithFacebook: false,
  loginWithGoogle: false,
  loginWithLinkedIn: false,
  loginWithPassword: true,
  loginWithPhone: false,

  // This will be the schema allowed to create the user with a given `profile`
  CreateUserProfileInput: `
    firstName: String
    lastName: String
    dateOfBirth: Date
  `,

  overrideCreateUser: async (createUser, _, args, context) => {
    // You have the ability to override some default logic of user creation
    const { email, profile } = args;
    const response = await createUser(_, args, context);

    // If you do not want to automatically login the user,
    // Please make sure that you remove `token` and `tokenExpires`
    return response;
  },
});

load(AccountModules);
