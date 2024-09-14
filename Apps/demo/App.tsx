import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';

import Screen from './components/Screen';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Demo App!</Text>
        <TouchableOpacity onPress={() => console.log('Pressed!!')}>
          <Text>Press me!!</Text>
        </TouchableOpacity>
        <Screen />
      </View>
    </SafeAreaView>
  );
}

export default App;
