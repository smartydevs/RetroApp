import { Expo } from 'expo-server-sdk';
import moment from 'moment';
import { EventService } from './index';

export default class NotificationService {
  constructor(injection) {
    Object.assign(this, injection);
  }

  getUserNotifications(userId) {
    const { db } = this;

    return db.notifications
      .find({
        receiverId: userId,
        isViewed: false,
      })
      .fetch();
  }

  //Handles the notification creation for events that will start in 24 hours
  createNotificationsFor24HoursEvents() {
    const dateIn24Hours = moment()
      .add(1, 'day')
      .minute(0)
      .second(0)
      .millisecond(0)
      .toDate();

    const eventsIn24Hours = EventService.getEventsOnDate(dateIn24Hours);
    let messages = [];

    eventsIn24Hours.forEach(event => {
      const { title, users } = event;
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
    const dateIn3Hours = moment()
      .add(3, 'hour')
      .minute(0)
      .second(0)
      .millisecond(0)
      .toDate();

    const eventsIn3Hours = EventService.getEventsOnDate(dateIn3Hours);
    let messages = [];

    eventsIn3Hours.forEach(event => {
      const { title, users } = event;
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
    const now = moment()
      .minute(0)
      .second(0)
      .millisecond(0)
      .toDate();

    const events = EventService.getEventsOnDate(now);
    let messages = [];

    events.forEach(event => {
      const { title, users } = event;
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

        messages.push(message);
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

    return this.createPushNotification(pushToken, data.message);
  }

  createPushNotification(pushToken, notificationMessage) {
    return {
      to: pushToken,
      sound: 'default',
      body: notificationMessage,
    };
  }

  sendNotificationChunks(messages) {
    const expo = new Expo();

    const chunks = expo.chunkPushNotifications(messages);
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
