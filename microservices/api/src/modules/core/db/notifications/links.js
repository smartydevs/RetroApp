import Notifications from './collection';
import Events from '../events';

Notifications.addLinks({
  event: {
    collection: Events,
    type: 'one',
    field: 'eventId',
  },
});
