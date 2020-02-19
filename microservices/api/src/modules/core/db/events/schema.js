import SimpleSchema from 'simpl-schema';

import Events from './collection';

const LocationSchema = new SimpleSchema({
  latitude: String,
  longitude: String,
  addressName: {
    type: String,
    optional: true,
  },
});

const EventsSchema = new SimpleSchema({
  organiserId: String,
  location: LocationSchema,
  title: String,
  description: String,
  startDate: Date,
  endDate: {
    type: Date,
    optional: true,
  },
  categoriesId: {
    type: Array,
    optional: true,
  },
  'categoriesId.$': String,
  usersId: {
    type: Array,
    optional: true,
  },
  'usersId.$': {
    type: String,
  },
  photoId: {
    type: String,
    optional: true,
  },
  createdAt: {
    type: Date,
    optional: true,
  },
  updatedAt: {
    type: Date,
    optional: true,
  },
  createdBy: {
    type: String,
    optional: true,
  },
  updatedBy: {
    type: String,
    optional: true,
  },
});

Events.attachSchema(EventsSchema);
