import { Mongo } from 'meteor/mongo';
  
const AppUploads = new Mongo.Collection('appUploads');

export default AppUploads;
