import SimpleSchema from 'simpl-schema';

import AppReviews from './collection';

const AppReviewsSchema = new SimpleSchema({
  subject: String,
  body: String,
  createdBy: {
    type: String,
    optional: true,
  },
  createdAt: {
    type: Date,
    optional: true,
  },
});

AppReviews.attachSchema(AppReviewsSchema);
