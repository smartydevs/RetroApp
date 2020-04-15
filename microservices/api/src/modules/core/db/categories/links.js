import Categories from './collection';

import Events from '../events';
import { AppUploads } from '../../../uploads/db';

Categories.addLinks({
  events: {
    collection: Events,
    inversedBy: 'categories',
  },
  photo: {
    collection: AppUploads,
    field: 'photoId',
    type: 'one',
  },
});
