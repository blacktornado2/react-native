import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {Screen1, Screen2} from './src/screens';

export default function App() {
  return (
    <View>
      <Screen1 />
      <Screen2 />
    </View>
  );
}

const styles = StyleSheet.create({});
