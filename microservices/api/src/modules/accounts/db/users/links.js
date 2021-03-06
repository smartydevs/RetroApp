import Users from './collection';
import { Categories, Events } from '../../../core/db';
import { AppUploads } from '../../../uploads/db';

Users.addLinks({
  ownedEvents: {
    collection: Events,
    inversedBy: 'organiser',
  },
  participatingEvents: {
    collection: Events,
    inversedBy: 'users',
  },
  followingCategories: {
    collection: Categories,
    field: 'profile.categoryIds',
    type: 'many',
  },
  avatar: {
    collection: AppUploads,
    field: 'profile.avatarId',
    type: 'one',
  },
});
