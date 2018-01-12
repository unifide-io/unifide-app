# Unifide App #

## Setup ##
___

### Initialize project and install dependencies ###
```
npm init
npm install
firebase login
```
### Edit your config ###
You'll need to populate your config.js with your app settings. They can be find in your Firebase Console.
```js
  var config = {
    apiKey: "youApiKey",
    authDomain: "yourAuthDomain",
    databaseURL: "yourDatabaseUrl",
    projectId: "yourProjectId",
    storageBucket: "yourStorageBucket",
    messagingSenderId: "yourMessagingSenderId"
  };
```
### Serving Test Environment
```
polymer serve
```
### Deploying to Firebase
```
firebase deploy
```
