import { Meteor } from 'meteor/meteor';
import AppUploads from './collection';
import { UploaderService } from '../../services';

AppUploads.before.insert(function(userId, doc) {
  doc.createdAt = Date.now();
});

AppUploads.before.update(function(userId, doc, fieldNames, modifier) {
  modifier.$set = modifier.$set || {};
  modifier.$set.updatedAt = Date.now();
});

AppUploads.after.remove(function(userId, doc) {
  Meteor.defer(() => {
    UploaderService.remove(doc.path);

    if (doc.thumbs && doc.thumbs.length > 0) {
      doc.thumbs.forEach(({ path }) => {
        UploaderService.remove(path);
      });
    }
  });
});
