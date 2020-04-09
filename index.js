import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/app';
import SignIn from './src/signIn.js';
import SignUp from './src/signUp.js';

AppRegistry.registerComponent(appName, () => App);
