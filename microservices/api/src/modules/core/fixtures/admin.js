import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import faker from 'faker';

import RolesEnum from '../../accounts/db/users/enums/RolesEnum';

const PASSWORD = '12345';

export function createAdmin(email) {
  const userId = Accounts.createUser({
    email,
    password: PASSWORD,
    profile: {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    },
  });

  Roles.addUsersToRoles(userId, [RolesEnum.ADMIN]);
}
