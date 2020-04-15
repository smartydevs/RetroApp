import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

import { UserService } from './index';
import RolesEnum from '../db/users/enums/RolesEnum';
import { ValidationService } from '../../core/services';
import { UploaderService } from '../../uploads/services';

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

    const token = this._generateAuthToken(userId);

    return { token, userId };
  }

  setUserPassword(email, newPassword) {
    const user = Accounts.findUserByEmail(email);

    return Accounts.setPassword(user._id, newPassword, { logout: false });
  }

  _changeUserEmail(user, newEmail) {
    UserService.validateEmail(newEmail);

    const userId = user._id;
    const oldEmail = user.emails[0].address;
    if (!oldEmail) {
      throw new Error('invalid-user');
    }

    Accounts.removeEmail(userId, oldEmail);
    Accounts.addEmail(userId, newEmail);
  }

  updateUserInfo(user, userInfo) {
    const { db } = this;

    if (userInfo.email) {
      this._changeUserEmail(user, userInfo.email);
    }

    const updateObj = {};

    if (userInfo.firstName) {
      updateObj['profile.firstName'] = userInfo.firstName.trim();
    }

    if (userInfo.lastName) {
      updateObj['profile.lastName'] = userInfo.lastName.trim();
    }

    db.users.update(user._id, { $set: updateObj });

    return true;
  }

  saveMemberAvatar(userId, avatarId) {
    const { db } = this;

    db.users.update(userId, {
      $set: {
        'profile.avatarId': avatarId,
      },
    });
  }

  addPushToken(userId, token) {
    const { db } = this;

    if (!token) {
      throw new Error('token-null');
    }

    db.users.update(
      {
        _id: userId,
      },
      {
        $set: {
          'profile.pushToken': token,
        },
      }
    );

    return true;
  }

  addMemberDetails({ email, details }) {
    const { db } = this;
    const user = Accounts.findUserByEmail(email);
    if (!user) {
      throw new Error('email-not-used');
    }

    const { _id: userId } = user;
    db.users.update(
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

  addMemberCategories(email, categories) {
    const { db } = this;
    const trimmedEmail = email.trim();
    if (!trimmedEmail.length) {
      throw new Error('email-expected');
    }

    const user = Accounts.findUserByEmail(email);
    if (!user) {
      throw new Error('Email not used');
    }

    return db.users.update(user._id, {
      $set: {
        'profile.categoryIds': [...categories],
      },
    });
  }

  _generateAuthToken(userId) {
    const stampedLoginToken = Accounts._generateStampedLoginToken();
    Accounts._insertLoginToken(userId, stampedLoginToken);

    const { token } = stampedLoginToken;

    return token;
  }

  loginMember(input) {
    const { db } = this;
    const email = input.email.trim();
    const password = input.password.trim();

    if (!email.length) {
      throw new Error('email-expected');
    }

    ValidationService.validateEmailFormat(email);

    const user = Accounts.findUserByEmail(email);

    if (!user) {
      throw new Error('Email not used');
    }

    const userId = user._id;

    const response = Accounts._checkPassword(user, password);
    if (response.error) {
      throw new Error(response.errors);
    }

    Accounts._clearAllLoginTokens(userId);

    const token = this._generateAuthToken(userId);

    return { token, userId };
  }
}
