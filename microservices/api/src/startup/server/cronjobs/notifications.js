import { SyncedCron } from 'meteor/littledata:synced-cron';
import { NotificationService } from '../../../modules/core/services';

SyncedCron.add({
  name: 'Notify when there are 24/3 hours left or just started',
  schedule: function(parser) {
    return parser('every 1 minute');
  },
  job: async function() {
    try {
      let messages = [
        ...NotificationService.createNotificationsFor24HoursEvents(),
        ...NotificationService.createNotificationsFor3HoursEvents(),
        ...NotificationService.createNotificationsForNowEvents(),
      ];

      NotificationService.sendNotificationChunks(messages);
    } catch (error) {
      throw new Error(error);
    }
  },
});
