# RetrUp
RetrUp is a platform where the users can create or participate in Retro-themed events.

### Events
Events are divided into several categories, the user being able to select their preferences, thus having personalized results:
 - music
 - fashion
 - gaming
 - culture
 - sport
### Run RetrUp on local emulator
In order to run the app, expo-cli needs to be installed globally:
```sh
npm install -g expo-cli
```
Once the repository has been cloned, several commands need to be executed:
```sh
$ cd react-native
$ npm install
$ expo start -c
```

It is important to note that while the app is being tested on an emulator, [the push notifications will not work](https://docs.expo.io/versions/latest/sdk/notifications/)!
If you have an Android device, once you run `expo start -c` a QR Code that you can scan using the [Expo App](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US) will appear in the command line. This way, if your phone is connected to the same network as your computer, you will be able to test the app directly from your phone.

### Run the back-end server on local
In order to run the back-end server you first need to have the repository cloned. Then these commands will run the server:
```sh
cd microservices/api
npm install
npm start
```

## It is not necessary to run the back-end on local, because the mobile application uses the deployed back-end server
