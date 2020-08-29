import { Meteor } from 'meteor/meteor';

import GenderEnum from '../../db/users/enums/GenderEnum';
import RolesEnum from '../../db/users/enums/RolesEnum';
import { UserService } from '../../services';
import { Users } from '../../db';
import { AppUploads } from '../../../uploads/db';
import { Categories, Reviews } from '../../../core/db';

export default {
  User: {
    email: async ({ _id: userId }) => {
      const user = await Meteor.users.findOne(userId);
      return user && user.emails && user.emails.length && user.emails[0].address;
    },
    news: async ({ _id: userId }) => {
      return UserService.getNews(userId);
    },
    followingCategories: ({ _id }) => {
      const user = Users.findOne(_id);
      const { categoryIds = [] } = user.profile || {};
      return Categories.find({ _id: { $in: categoryIds } }).fetch();
    },
    reviewsNumber: ({ _id }) => {
      return Reviews.find({
        authorId: _id,
      }).count();
    },
  },
  UserStandardProfile: {
    fullName: userProfile => UserService.getFullName(userProfile),
    avatar: ({ avatarId }) => {
      return AppUploads.findOne(avatarId);
    },
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
