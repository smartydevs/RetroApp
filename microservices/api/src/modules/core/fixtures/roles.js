import { Roles } from 'meteor/alanning:roles';
import RolesEnum from '../../accounts/db/users/enums/RolesEnum';

export async function loadRoles() {
  const roles = Roles.getAllRoles().fetch();
  console.log('roles', roles);
  if (roles.length === 0) {
    Roles.createRole(RolesEnum.ORGANISER);
    Roles.createRole(RolesEnum.ADMIN);
    Roles.createRole(RolesEnum.USER);
  }
}
