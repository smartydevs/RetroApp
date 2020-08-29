export default class ReviewService {
  constructor(injection) {
    Object.assign(this, injection);
  }

  addReview(input, userId) {
    const { db } = this;

    input.authorId = userId;
    const reviewId = db.reviews.insert(input);
    return db.reviews.findOne(reviewId);
  }

  async editReview(reviewId, input) {
    const { db } = this;

    await db.reviews.update(reviewId, { $set: { ...input } });
    return db.reviews.findOne(reviewId);
  }

  deleteReview(reviewId) {
    const { db } = this;

    return db.reviews.remove(reviewId);
  }
}
