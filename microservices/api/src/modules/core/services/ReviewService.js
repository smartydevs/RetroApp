export default class ReviewService {
  constructor(injection) {
    Object.assign(this, injection);
  }

  addReview(input, userId) {
    const { db } = this;

    input.authorId = userId;
    return db.reviews.insert(input);
  }

  editReview(reviewId, input) {
    const { db } = this;

    return db.reviews.update(reviewId, { $set: { ...input } });
  }

  deleteReview(reviewId) {
    const { db } = this;

    return db.reviews.remove(reviewId);
  }
}
