import { Meteor } from 'meteor/meteor';

import { UserService } from '../../services';

export default {
  User: {
    email: async ({ _id: userId }) => {
      const user = await Meteor.users.findOne(userId);
      return user && user.emails && user.emails.length && user.emails[0].address;
    },
  },
  UserStandardProfile: {
    fullName: userProfile => UserService.getFullName(userProfile),
  },
};
