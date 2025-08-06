import {Text, StyleSheet} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import TodosScreen from './screens/TodosScreen';
import Todos from './components/Todos';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Text style={styles.appHeader}>APP</Text>
      <Stack.Navigator>
        <Stack.Screen options={{title: "back"}} name="Home" component={Todos} />
        <Stack.Screen name="Todos" component={TodosScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  appHeader: {
    marginTop: 20
  }
})

export default App;