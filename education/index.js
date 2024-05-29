/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import Main from './Main';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';
import Store from './Src/Store/index';
import React from 'react';
const withReducer = () => {
  return (
    <Provider store={Store}>
      <Main />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => withReducer);
