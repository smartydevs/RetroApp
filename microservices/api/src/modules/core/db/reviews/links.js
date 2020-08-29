import Reviews from './collection';

import Users from '../../../accounts/db/users';
import Events from '../events';

Reviews.addLinks({
  author: {
    collection: Users,
    field: 'authorId',
    type: 'one',
  },
  event: {
    collection: Events,
    field: 'eventId',
    type: 'one',
  },
});
