[![CircleCI](https://circleci.com/gh/aziz-ka/react-redux-firebase-boilerplate.svg?style=shield&circle-token=cb8b0780c1e777282c670710271b50ea3da13611)](https://circleci.com/gh/aziz-ka/react-redux-firebase-boilerplate)


# A simple React-Redux-Firebase boilerplate

#### Inspired by r-park's [To Do App Example](https://github.com/r-park/todo-redux-saga)


## Stack

- React
- React-Hot-Loader `3.0.0-beta.2`
- React-Redux
- React-Router
- React-Router-Redux
- Redux
- Redux-Saga
- Redux-Devtools-Extension for Chrome
- Firebase SDK 3 with OAuth authentication
- Babel
- Immutable
- Reselect
- CSS Modules
- SASS
- Webpack
- Webpack Dashboard


## Quick Start

```shell
$ git clone https://github.com/aziz-ka/react-redux-firebase-boilerplate.git
$ cd react-redux-firebase-boilerplate
$ npm install
$ npm start
```
Then rename `/firebaserc-example` and `/client/firebase/config-example.js` by removing the `-example` part and provide your project's API keys

## Deploying to Firebase
#### Prerequisites:
- Create a free Firebase account at https://firebase.google.com
- Create a project from your [Firebase account console](https://console.firebase.google.com)
- Configure the authentication providers for your Firebase project from your Firebase account console

#### Configure this app with your project-specific details:
```javascript
// .firebaserc

{
  "projects": {
    "default": "your-project-id"
  }
}
```
```javascript
// client/firebase/config.js

export const firebaseConfig = {
  apiKey: 'your api key',
  authDomain: 'your-project-id.firebaseapp.com',
  databaseURL: 'https://your-project-id.firebaseio.com',
  storageBucket: 'your-project-id.appspot.com'
};
```

#### Install firebase-tools:
```shell
$ npm install -g firebase-tools
```

#### Build and deploy the app:
```shell
$ npm run build
$ firebase login
$ firebase use default
$ firebase deploy
```


## NPM Commands

|Script|Description|
|---|---|
|`npm start`|Start webpack development server @ `localhost:3000`|
|`npm run build`|Lint, test, and build the application to `./build`|
|`npm run lint`|Lint `.js` files|
|`npm run server`|Start express server @ `localhost:3000` to serve built artifacts from `./build` (must run `npm run build` first)|
|`npm test`|Run unit tests with Karma and Jasmine|
|`npm run test:watch`|Run unit tests with Karma and Jasmine; watch for changes to re-run tests|
