export default class AppReviewService {
  constructor(injection) {
    Object.assign(this, injection);
  }

  createAppReview(input, userId) {
    const { db } = this;

    input.createdBy = userId;
    return db.appReviews.insert(input);
  }
}
