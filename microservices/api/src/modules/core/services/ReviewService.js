export default class ReviewService {
  constructor(injection) {
    Object.assign(this, injection);
  }

  getReviews(eventId) {
    const { db } = this;

    return db.reviews
      .createQuery({
        $filters: {
          eventId,
        },
        _id: 1,
        title: 1,
        description: 1,
        createdAt: 1,
        stars: 1,
        author: {
          _id: 1,
          profile: {
            firstName: 1,
            lastName: 1,
            avatarId: 1,
            avatar: {
              _id: 1,
              path: 1,
              fullPath: 1,
            },
          },
        },
      })
      .fetch();
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
