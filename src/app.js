/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MasterNavigator from './navigators/root';

export default class multiScreen_App extends Component {
  render() {
    return (
        <MasterNavigator />
    );
  }
}
AppRegistry.registerComponent('multiScreen_App', () => multiScreen_App);
