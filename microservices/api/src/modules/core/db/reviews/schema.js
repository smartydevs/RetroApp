import SimpleSchema from 'simpl-schema';

import Reviews from './collection';

const ReviewsSchema = new SimpleSchema({
  stars: {
    type: Number,
    optional: true,
  },
  text: String,
  eventId: String,
  authorId: String,
  createdAt: {
    type: Date,
    optional: true,
  },
});

Reviews.attachSchema(ReviewsSchema);