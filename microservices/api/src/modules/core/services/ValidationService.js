export default class ValidationService {
  constructor(injection) {
    Object.assign(this, injection);
  }

  /**
   * Throws an error if the email has a wrong format
   * @param {string} email
   */
  validateEmailFormat(email) {
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const testResult = re.test(email);
    if (!testResult) {
      throw new Error('email-invalid');
    }
  }
}
