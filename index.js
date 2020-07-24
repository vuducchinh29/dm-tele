/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from "./src/pages/App";
import { name as appName } from './app.json';
import './shim';
require('crypto');

AppRegistry.registerComponent(appName, () => App);
