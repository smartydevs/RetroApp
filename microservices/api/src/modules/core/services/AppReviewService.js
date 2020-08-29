export default class AppReviewService {
  constructor(injection) {
    Object.assign(this, injection);
  }

  createAppReview(input, userId) {
    const { db } = this;

    input.createdBy = userId;
    const appReviewId = db.appReviews.insert(input);
    return db.appReviews.findOne(appReviewId);
  }
}
