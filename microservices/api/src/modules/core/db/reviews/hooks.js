import Reviews from './collection';

Reviews.before.insert(function(userId, doc) {
  doc.createdAt = Date.now();
});
