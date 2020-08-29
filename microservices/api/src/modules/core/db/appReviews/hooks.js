import AppReviews from './collection';

AppReviews.before.insert(function(userId, doc) {
  doc.createdAt = Date.now();
});
