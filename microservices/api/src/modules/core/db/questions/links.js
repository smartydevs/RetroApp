import Questions from './collection';

import Events from '../events';
import { Users } from '../../../accounts/db';

Questions.addLinks({
  event: {
    collection: Events,
    field: 'eventId',
    type: 'one',
  },
  author: {
    collection: Users,
    field: 'authorId',
    type: 'one',
  },
});
