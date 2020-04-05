export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyDW490BtQkcFf9q1QpDLeWwmIrIVWwS32k",
    authDomain: "angular-app-fe489.firebaseapp.com",
    databaseURL: "https://angular-app-fe489.firebaseio.com",
    projectId: "angular-app-fe489",
    storageBucket: "",
    messagingSenderId: "410269889902",
    appId: "1:410269889902:web:ed3987a0d346b170c83d7f"
  },
  AUTH: {
    TOKEN_HEADER_NAME: 'app-token',
    USER: 'app-user',
  },
  REST_URL: 'https://jsonplaceholder.typicode.com',
  LOCAL_REST_URL: 'http://localhost:4205/api',
  RECORDS: {
    SERVICE_PATH: '/records'
  },
  USERS: {
    LOGIN: '/users/login',
    REGISTER: '/users/register',
    SEARCH: '/users/search',
    ROOM: '/users/room',
    FRIEND: '/users/friend'
  }
};
