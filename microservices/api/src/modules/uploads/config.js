import { Meteor } from 'meteor/meteor';

const config = {
  AWS: Meteor.settings.private.AWS || {},
  // AWS: (Meteor.settings.private.AWS && Meteor.settings.private.AWS.S3) || {},
};

if (!config.AWS) {
  console.log(`There is no configuration for AWS found. Uploading will not work.`);
}

export default config;
