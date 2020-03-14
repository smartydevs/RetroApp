import Notifications from './collection';

Notifications.before.insert(function(userId, doc) {
  doc.createdAt = Date.now();
  doc.isViewed = false;
});

Notifications.before.update(function(userId, doc, fieldNames, modifier, options) {
  modifier.$set = modifier.$set || {};
  modifier.$set.updatedAt = Date.now();
});
