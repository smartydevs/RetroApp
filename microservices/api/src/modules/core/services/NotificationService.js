import { Expo } from 'expo-server-sdk';
import moment from 'moment';
import { EventService } from './index';

export default class NotificationService {
  constructor(injection) {
    Object.assign(this, injection);
  }

  getUserNotifications(userId) {
    const { db } = this;

    const notifications = db.notifications
      .createQuery({
        $filters: {
          receiverId: userId,
          isViewed: false,
        },
        _id: 1,
        data: {
          message: 1,
        },
        event: {
          _id: 1,
          photo: {
            path: 1,
            fullPath: 1,
          },
        },
      })
      .fetch();

    return notifications;
  }

  readAllUserNotifications(userId) {
    const { db } = this;

    db.notifications.update(
      { receiverId: userId },
      { $set: { isViewed: true } },
      { multi: true }
    );

    return true;
  }

  readUserNotification(userId, notificationId) {
    const { db } = this;

    const res = db.notifications.update(
      { receiverId: userId, _id: notificationId },
      { $set: { isViewed: true } }
    );
    return true;
  }

  //Handles the notification creation for events that will start in 24 hours
  createNotificationsFor24HoursEvents() {
    // WE ADD 3 MORE HOURS TO HANDLE OUR TIME ZONE
    const dateIn24Hours = moment()
      .add(3, 'hour')
      .add(1, 'day')
      .second(0)
      .millisecond(0)
      .toDate();

    const eventsIn24Hours = EventService.getEventsOnDate(dateIn24Hours);
    let messages = [];
    eventsIn24Hours.forEach(event => {
      const { title, users = [] } = event;
      const data = {
        message: `Event ${title} will start in 24 hours`,
      };

      users.forEach(user => {
        const {
          _id: userId,
          profile: { pushToken },
        } = user;

        const message = this.createNotification({
          receiverId: userId,
          eventId: event._id,
          data,
          pushToken,
        });

        messages.push(message);
      });
    });

    return messages;
  }

  ////Handles the notification creation for events that will start in 3 hours
  createNotificationsFor3HoursEvents() {
    // WE ADD 3 MORE HOURS TO HANDLE OUR TIME ZONE
    const dateIn3Hours = moment()
      .add(6, 'hour')
      .second(0)
      .millisecond(0)
      .toDate();

    const eventsIn3Hours = EventService.getEventsOnDate(dateIn3Hours);
    let messages = [];
    eventsIn3Hours.forEach(event => {
      const { title, users = [] } = event;
      const data = {
        message: `Event ${title} will start in 3 hours`,
      };
      users.forEach(user => {
        const {
          _id: userId,
          profile: { pushToken },
        } = user;

        const message = this.createNotification({
          receiverId: userId,
          eventId: event._id,
          data,
          pushToken,
        });

        messages.push(message);
      });
    });

    return messages;
  }

  //Handles the notification creation for events that are starting right now
  createNotificationsForNowEvents() {
    // WE ADD 3 MORE HOURS TO HANDLE OUR TIME ZONE
    const now = moment()
      .add(3, 'hour')
      .second(0)
      .millisecond(0)
      .toDate();

    const events = EventService.getEventsOnDate(now);
    let messages = [];
    events.forEach(event => {
      const { title, users = [] } = event;
      const data = {
        message: `Event ${title} just started`,
      };
      users.forEach(user => {
        const {
          _id: userId,
          profile: { pushToken },
        } = user;

        const message = this.createNotification({
          receiverId: userId,
          eventId: event._id,
          data,
          pushToken,
        });

        if (message) {
          messages.push(message);
        }
      });
    });

    return messages;
  }

  createNotification({ receiverId, data, pushToken, eventId }) {
    const { db } = this;

    const notificationObject = {
      receiverId,
      data,
      eventId,
      isViewed: false,
    };

    const notificationId = db.notifications.insert(notificationObject);

    return pushToken ? this.createPushNotification(pushToken, data.message) : null;
  }

  createPushNotification(pushToken, notificationMessage) {
    return {
      to: pushToken,
      sound: 'default',
      body: notificationMessage,
    };
  }

  sendNotificationChunks(messages = []) {
    const expo = new Expo();

    const finalMessages = messages.filter(m => !!m);

    const chunks = expo.chunkPushNotifications(finalMessages);
    let tickets = [];
    (async () => {
      for (let chunk of chunks) {
        try {
          let ticketChunk = await expo.sendPushNotificationsAsync(chunk);
          tickets.push(...ticketChunk);
          // https://docs.expo.io/versions/latest/guides/push-notifications#response-format
        } catch (error) {
          console.error(error);
        }
      }
    })();

    return tickets;
  }
}
