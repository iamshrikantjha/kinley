import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import AppNavigator from './src/navigation/index';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
          <AppNavigator />
    );
  }
}
