import Categories from './collection';

Categories.before.insert(function(userId, doc) {
  doc.createdAt = Date.now();
});

Categories.before.update(function(userId, doc, fieldNames, modifier, options) {
  modifier.$set = modifier.$set || {};
  modifier.$set.updatedAt = Date.now();
});
