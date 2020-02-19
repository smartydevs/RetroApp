import SimpleSchema from 'simpl-schema';
import AppUploads from './collection';

const AppUploadsSchema = new SimpleSchema({
  name: {
    type: String,
  },
  mimeType: {
    type: String,
  },
  size: {
    type: Number,
  },
  resourceType: {
    type: String,
    optional: true,
  },
  dimension: {
    type: Object,
    optional: true,
  },
  'dimension.width': {
    type: Number,
    optional: true,
  },
  'dimension.height': {
    type: Number,
    optional: true,
  },
  resourceId: {
    type: String,
    optional: true,
  },
  path: {
    type: String,
  },
  thumbs: {
    type: Array,
    optional: true,
  },
  'thumbs.$': {
    type: new SimpleSchema({
      path: String,
      width: Number,
      height: Number,
    }),
  },
  userId: {
    type: String,
    optional: true,
  },
  createdAt: {
    type: Date,
    optional: true,
  },
  updatedAt: {
    type: Date,
    optional: true,
  },
  createdBy: {
    type: String,
    optional: true,
  },
  updatedBy: {
    type: String,
    optional: true,
  },
});

AppUploads.attachSchema(AppUploadsSchema);
