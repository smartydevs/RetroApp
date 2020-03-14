import { Meteor } from 'meteor/meteor';

import GenderEnum from '../../db/users/enums/GenderEnum';
import RolesEnum from '../../db/users/enums/RolesEnum';
import { UserService } from '../../services';

export default {
  User: {
    email: async ({ _id: userId }) => {
      const user = await Meteor.users.findOne(userId);
      return user && user.emails && user.emails.length && user.emails[0].address;
    },
    news: async ({ _id: userId }) => {
      return UserService.getNews(userId);
    },
  },
  UserStandardProfile: {
    fullName: userProfile => UserService.getFullName(userProfile),
  },
  GenderEnum: {
    MALE: GenderEnum.MALE,
    FEMALE: GenderEnum.FEMALE,
  },
  RolesEnum: {
    ADMIN: () => RolesEnum.ADMIN,
    ORGANISER: () => RolesEnum.ORGANISER,
    USER: () => RolesEnum.USER,
  },
};
