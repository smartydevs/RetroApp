import SimpleSchema from 'simpl-schema';
import _ from 'lodash';

import GenderEnum from './enums/GenderEnum';
import RolesEnum from './enums/RolesEnum';

export const UserStandardProfile = new SimpleSchema({
  firstName: { type: String, optional: true },
  lastName: { type: String, optional: true },
  avatarId: { type: String, optional: true },
  phoneNumber: { type: String, optional: true },
  dateOfBirth: { type: Date, optional: true },
  gender: {
    type: String,
    optional: true,
    allowedValues: _.values(GenderEnum),
  },
});

export default new SimpleSchema({
  username: {
    type: String,
    optional: true,
  },
  emails: {
    type: Array,
    optional: true,
  },
  'emails.$': {
    type: Object,
  },
  'emails.$.address': {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
  },
  'emails.$.verified': {
    type: Boolean,
  },
  createdAt: Date,
  updatedAt: Date,
  // Make sure this services field is in your schema if you're using any of the accounts packages
  services: {
    type: Object,
    optional: true,
    blackbox: true,
  },
  roles: {
    type: Array,
    optional: true,
  },
  'roles.$': {
    type: String,
    allowedValues: _.values(RolesEnum),
  },
  // This is only used for admins and frontdesks
  profile: {
    type: UserStandardProfile,
    optional: true,
  },
  isEnabled: Boolean,
  hasPhoneVerified: Boolean,
  hasSetPassword: {
    type: Boolean,
    optional: true,
  },
  phone: {
    type: Object,
    optional: true,
  },
  'phone.number': {
    type: String,
    optional: true,
  },
  'phone.verified': {
    type: Boolean,
    optional: true,
  },
});
