import { Accounts } from 'meteor/accounts-base';

import { ValidationService } from '../../core/services';

export default class UserService {
  constructor(injection) {
    Object.assign(this, injection);
  }

  getFullName(userProfile = {}) {
    const { firstName = '', lastName = '' } = userProfile;

    if (firstName || lastName) {
      return `${firstName} ${lastName}`.trim();
    }

    return null;
  }

  /**
   * Checks if the email is already used and also checks it's format
   * @param {string}email
   */
  validateEmail(email) {
    ValidationService.validateEmailFormat(email);

    const user = Accounts.findUserByEmail(email);
    if (user) {
      throw new Error('email-used');
    }
  }

  getNews(userId) {
    const { db } = this;

    return db.notifications
      .find({
        receiverId: userId,
        isViewed: false,
      })
      .fetch();
  }

  getUserInfo(userId) {
    const { db } = this;

    return db.user
      .createQuery({
        $filters: {
          _id: userId,
        },
        roles: 1,
        email: 1,
        profile: {
          firstName: 1,
          lastName: 1,
          fullName: 1,
          avatar: {
            path: 1,
            fullPath: 1,
          },
        },
        news: {
          type: 1,
          // date: 1,
          createdAt: 1,
        },
      })
      .fetch();
  }
}
