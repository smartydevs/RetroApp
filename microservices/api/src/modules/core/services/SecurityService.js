import { Roles } from 'meteor/alanning:roles';

export default class SecurityService {
  constructor(injection) {
    Object.assign(this, injection);
  }

  checkLoggedIn({ userId }) {
    if (!userId) {
      throw new Error('not-authorized', 'You are not authorized');
    }
  }

  checkRole(userId, role) {
    this.checkLoggedIn({ userId });
    if (!this.hasRole(userId, role)) {
      throw new Error('not-authorized');
    }
  }

  hasRole(userId, role) {
    return Roles.userIsInRole(userId, role);
  }

  notificationBelongsToUser(userId, notificationId) {
    const { db } = this;

    this.checkLoggedIn({ userId });
    const notification = db.notifications.findOne(notificationId);

    return notification.receiverId === userId;
  }

  reviewBelongsToUser(userId, reviewId) {
    const { db } = this;

    const review = db.reviews.findOne({
      _id: reviewId,
      authorId: userId,
    });

    if (!review) {
      throw new Error('not-authorized');
    }
  }

  checkUserIsEventOrganiser(userId, eventId) {
    const { db } = this;

    const event = db.events.findOne({
      _id: eventId,
      organiserId: userId,
    });

    if (!event) {
      throw new Error('not-authorized');
    }
  }

  checkUserIsInEvent(userId, eventId) {
    const { db } = this;

    const event = db.events.findOne({
      _id: eventId,
      usersId: { $in: [userId] },
    });

    if (!event) {
      throw new Error('not-authorized');
    }
  }
}
