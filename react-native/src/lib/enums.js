const Constants = {
  APP_NAME: 'BetBanter',
  METEOR_LOGIN_TOKEN: 'meteor-login-token',
  TERMS_OF_USE: '',
  PRIVACY_POLICY: '',
  TOKEN: 'token',
  USER_ID: 'userId',
  PROFILE_PICURE: 'profilePicture',
}

export const EnvironmentEnum = {
  LOCAL: 'Local',
  DEVELOPMENT: 'Development',
}

export const OS = {
  IOS: 'ios',
  ANDROID: 'android',
}

export const ApiUrls = {
  [EnvironmentEnum.LOCAL]: 'http://localhost:3000/graphql',
  [EnvironmentEnum.DEVELOPMENT]: 'http://134.122.68.158:3000/graphql',
}

export const ScreenEnum = {
  LOADING: 'Loading',
  SIGN_UP: 'SignUp',
  LOG_IN: 'Login',
  ENTER_DETAILS: 'EnterDetails',
  CHOOSE_FEED: 'ChooseFeed',
  MAIN: 'Main',
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
