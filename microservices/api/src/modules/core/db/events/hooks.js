import Events from './collection';

Events.before.insert(function(userId, doc) {
  doc.createdAt = Date.now();
});

Events.before.update(function(userId, doc, fieldNames, modifier, options) {
  modifier.$set = modifier.$set || {};
  modifier.$set.updatedAt = Date.now();
});
