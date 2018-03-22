// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyA6-B5miXtuD48PPar3XiYYz0zgmxb9V40",
    authDomain: "test-aedec.firebaseapp.com",
    databaseURL: "https://test-aedec.firebaseio.com",
    projectId: "test-aedec",
    storageBucket: "test-aedec.appspot.com",
    messagingSenderId: "806268806558"
  }
};
