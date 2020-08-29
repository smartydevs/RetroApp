const Constants = {
  APP_NAME: 'BetBanter',
  METEOR_LOGIN_TOKEN: 'meteor-login-token',
  TERMS_OF_USE: '',
  PRIVACY_POLICY: '',
  TOKEN: 'token',
  USER_ID: 'userId',
  PROFILE_PICURE: 'profilePicture',
  CAMERA_PERMISSIONS: 'cameraPermissions',
}

export const EnvironmentEnum = {
  LOCAL: 'Local',
  DEVELOPMENT: 'Development',
}

export const OS = {
  IOS: 'ios',
  ANDROID: 'android',
}

export const SERVER_URL = 'http://134.122.68.158:3000'

export const ApiUrls = {
  [EnvironmentEnum.LOCAL]: 'http://88b60311db72.ngrok.io',
  [EnvironmentEnum.DEVELOPMENT]: 'http://134.122.68.158:3000/graphql',
}

export const ScreenEnum = {
  LOADING: 'Loading',
  SIGN_UP: 'SignUp',
  LOG_IN: 'Login',
  ENTER_DETAILS: 'EnterDetails',
  CHOOSE_FEED: 'ChooseFeed',
  MAIN: 'Main',
  EVENT: 'Event',
  FORGOT_PASSWORD: 'ForgotPassword',
  USER_PROFILE: 'UserProfile',
  EDIT: 'Edit',
  REVIEWS: 'Reviews',
  CONTACT_US: 'ContactUs',
}

export const BottomStackScreensEnum = {
  MAIN: 'Main',
  NOTIFICATION: 'Notification',
  SEARCH: 'Search',
  PROFILE: 'Profile',
  CREATE: 'Create',
}

export const NotificationTypeEnum = {
  ERROR: 'ERROR',
  SUCESS: 'SUCESS',
}

export const NotificationLength = {
  SHORT: 1000,
  LONG: 2000,
  FOREVER: 0,
}

export default Constants
