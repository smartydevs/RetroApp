import { db } from 'meteor/cultofcoders:apollo';

import UserServiceModel from './UserService';
import MemberServiceModel from './MemberService';
import OrganiserServiceModel from './OrganiserService';

export const UserService = new UserServiceModel({
  db,
});
export const MemberService = new MemberServiceModel({
  db,
});
export const OrganiserService = new OrganiserServiceModel();
