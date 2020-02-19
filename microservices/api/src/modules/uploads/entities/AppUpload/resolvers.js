import { Meteor } from 'meteor/meteor';
const URL = Meteor.settings.public.AWS.S3.url;

export default {
  AppUpload: {
    fullPath(upload) {
      return URL + '/' + upload.path;
    },
    thumb(upload = {}, { size }, ctx, ast) {
      const uploadDimension = upload.dimension || {};
      const originalUpload = {
        path: upload.path,
        width: uploadDimension.width,
        height: uploadDimension.height,
      };
      // const payload = JSON.parse(ast.variableValues.payload);
      // if (payload.thumbSize) {
      //   size = payload.thumbSize;
      // }
      if (!upload.thumbs) {
        return originalUpload;
      }

      const thumb = upload.thumbs.find(
        t => t.width === size.width && t.height === size.height
      );
      return thumb ? thumb : originalUpload;
    },
  },
  AppUploadThumb: {
    fullPath(thumb) {
      return URL + '/' + thumb.path;
    },
  },
};
