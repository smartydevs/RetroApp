export default class UserService {
  constructor(injection) {
    Object.assign(this, injection);
  }

  getFullName(userProfile = {}) {
    const { firstName = '', lastName = '' } = userProfile;

    if (firstName || lastName) {
      return `${firstName} ${lastName}`.trim();
    }

    return null;
  }

  registerUser(input) {

  }
}
