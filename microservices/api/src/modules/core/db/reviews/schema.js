import SimpleSchema from 'simpl-schema';

import Reviews from './collection';

const ReviewsSchema = new SimpleSchema({
  stars: {
    type: Number,
    optional: true,
  },
  title: String,
  description: String,
  eventId: String,
  authorId: String,
  createdAt: {
    type: Date,
    optional: true,
  },
});

Reviews.attachSchema(ReviewsSchema);
