// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //api news
  apiUrl: 'https://newsapi.org/v2',
  apiKey: 'ef16671a4fb143d59dffebb10667b1e6',

  firebase: {
    apiKey: "AIzaSyD3OIoy6RybaCheyVkcto4NU9iqcF_EqSA",
    authDomain: "budgetsavingapp.firebaseapp.com",
    databaseURL: "https://budgetsavingapp.firebaseio.com",
    projectId: "budgetsavingapp",
    storageBucket: "budgetsavingapp.appspot.com",
    messagingSenderId: "89844900575",
    appId: "1:89844900575:web:5b7e3db0648d7061f53f6a",
    measurementId: "G-CHXWTP7TN6"
  }

  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
