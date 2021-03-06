import { Accounts } from 'meteor/accounts-base';
import moment from 'moment';

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

    const users = db.users
      .createQuery({
        $filters: {
          _id: userId,
        },
        _id: 1,
        profile: {
          firstName: 1,
          lastName: 1,
          fullName: 1,
          avatarId: 1,
          categoryIds: 1,
          avatar: {
            path: 1,
            fullPath: 1,
          },
        },
        followingCategories: {
          _id: 1,
          name: 1,
          photo: {
            path: 1,
            fullPath: 1,
          },
        },
        ownedEvents: {
          _id: 1,
          title: 1,
          startDate: 1,
          location: {
            addressName: 1,
          },
          photo: {
            path: 1,
            fullPath: 1,
          },
        },
        participatingEvents: {
          _id: 1,
          title: 1,
          startDate: 1,
          location: {
            addressName: 1,
          },
          photo: {
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
    const user = users ? users[0] : {};
    const filteredParticipatingEvents = user.participatingEvents
      ? user.participatingEvents.filter(event => {
          const { startDate } = event;
          return moment(startDate).diff(moment()) >= 0;
        })
      : [];
    user.participatingEvents = filteredParticipatingEvents;
    return user;
  }
}
