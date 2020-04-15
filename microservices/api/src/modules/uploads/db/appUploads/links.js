import { Meteor } from 'meteor/meteor';

import AppUploads from './collection';

const URL = Meteor.settings.public.AWS.S3.url;

AppUploads.addReducers({
  fullPath: {
    body: {
      path: 1,
    },
    reduce({ path }) {
      return URL + '/' + path;
    },
  },
});
