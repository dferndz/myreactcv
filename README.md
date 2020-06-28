## React Resume Web App

This project is a web app that uses Google's Firebase as backend and can be used as a personal website to display professional information, such as work experience, education, skills, etc.

## Deploy your own instance

### Obtain an API key

It is important to obtain an api key before deploying your app.

### Deploy to Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Running locally

To run locally, clone tthe repository and add the variable REACT_APP_CV_API to your enviroment.
The value for this variable is the api key you need to request.

## Custom backend

This app employs Firebase. You can connect the app to your own Firebase account.
Visit [Firebase](https://firebase.google.com/) to get an account.

#### Add the configuration to your app

When you start a web project at Firebase, you will get a config variable that looks like the one in the file firebase.config.ts in the src directory.
Replace the contents of the firebaseCOnfig variable with your own configuration.

### Configure Firebase

#### Database

Set up the database access rules:

````
{
  "rules": {
    "$api_id": {
      ".write": "auth.uid != null && auth.uid == $api_id",
      ".read": true
    }
  }
}```

#### Storage

Set up the storage access rules:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /images/{userId}/{allPaths=**} {
      allow read;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
  }
}```

#### Enable Google auth

You need to enable Google authentication in the Authentication tab in the Firebase menu.

#### Add your domain to the Oauth authorizations

In the Authentication tab, scroll down to Authorized domains and add your app's domain.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
````
