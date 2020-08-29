import Events from './collection';

import Users from '../../../accounts/db/users';
import Categories from '../categories';
import Reviews from '../reviews';
import { AppUploads } from '../../../uploads/db';
import Questions from '../questions';

Events.addLinks({
  organiser: {
    collection: Users,
    field: 'organiserId',
    type: 'one',
  },
  categories: {
    collection: Categories,
    field: 'categoriesId',
    type: 'many',
  },
  photo: {
    collection: AppUploads,
    field: 'photoId',
    type: 'one',
  },
  users: {
    collection: Users,
    field: 'usersId',
    type: 'many',
  },
  reviews: {
    collection: Reviews,
    inversedBy: 'event',
  },
  questions: {
    collection: Questions,
    inversedBy: 'event',
  },
});
