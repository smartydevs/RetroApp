import SimpleSchema from 'simpl-schema';

import Notifications from './collection';
import { Events } from '../../events';

const NotificationsSchema = new SimpleSchema({
  receiverId: {
    type: String,
  },
  isViewed: {
    type: String,
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
  },
  type: {
    type: String,
    allowedValues: Object.values(Events),
  },
});

Notifications.attachSchema(NotificationsSchema);
