import { Roles } from 'meteor/alanning:roles';

export default class SecurityService {
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
}
