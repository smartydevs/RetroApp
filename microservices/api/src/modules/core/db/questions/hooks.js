import Questions from './collection';

Questions.before.insert(function(userId, doc) {
  doc.createdAt = Date.now();
});
