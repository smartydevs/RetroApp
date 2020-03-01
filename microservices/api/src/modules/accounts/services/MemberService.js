import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

import { Users } from '../db';
import { UserService } from './index';
import RolesEnum from '../db/users/enums/RolesEnum';

export default class MemberService {
  constructor(injection) {
    Object.assign(this, injection);
  }

  registerMember(input) {
    const { email, password } = input;
    UserService.validateEmail(email);

    const userId = Accounts.createUser({
      email,
      password,
    });
    Roles.addUsersToRoles(userId, RolesEnum.MEMBER);

    return true;
  }

  addMemberDetails({ email, details }) {
    const user = Accounts.findUserByEmail(email);
    if (!user) {
      throw new Error('email-not-used');
    }

    const { _id: userId } = user;
    Users.update(
      { _id: userId },
      {
        $set: {
          profile: {
            ...details,
          },
        },
      }
    );

    return true;
  }
}
