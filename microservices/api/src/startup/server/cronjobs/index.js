import { Meteor } from 'meteor/meteor';
import { SyncedCron } from 'meteor/littledata:synced-cron';

import './notifications';

Meteor.startup(() => {
  SyncedCron.start();
});
