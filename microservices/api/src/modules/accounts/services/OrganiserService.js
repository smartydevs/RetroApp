import { Roles } from 'meteor/alanning:roles';
import RolesEnum from '../db/users/enums/RolesEnum';

export default class OrganiserService {
  constructor(injection) {
    Object.assign(this, injection);
  }

  becomeOrganiser(userId) {
    return Roles.addUsersToRoles(userId, RolesEnum.ORGANISER);
  }
}
