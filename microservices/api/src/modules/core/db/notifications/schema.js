import SimpleSchema from 'simpl-schema';

import Notifications from './collection';

const NotificationsSchema = new SimpleSchema({
  receiverId: {
    type: String,
  },
  eventId: {
    type: String,
  },
  isViewed: {
    type: Boolean,
    optional: true,
  },
  data: {
    type: Object,
    optional: true,
    blackbox: true,
  },
  createdAt: {
    type: Date,
    optional: true,
  }
});

Notifications.attachSchema(NotificationsSchema);
