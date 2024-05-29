import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Store from './Src/Store/index';
import {Provider} from 'react-redux';
import Main from './Main';

export default function App() {
  return (
    <Provider store={Store}>
      <Main />
    </Provider>
  );
}