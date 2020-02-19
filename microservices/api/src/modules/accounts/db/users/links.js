import Users from './collection';
import { Events } from '../../../core/db';

Users.addLinks({
  ownedEvents: {
    collection: Events,
    inversedBy: 'organiser',
  },
  participatingEvents: {
    collection: Events,
    inversedBy: 'users',
  },
});
