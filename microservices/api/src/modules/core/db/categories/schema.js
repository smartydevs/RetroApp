import SimpleSchema from 'simpl-schema';

import Categories from './collection';

const CategoriesSchema = new SimpleSchema({
  name: String,
  createdAt: {
    type: Date,
    optional: true,
  },
  photoId: {
    type: String,
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

Categories.attachSchema(CategoriesSchema);
