import { View, Text, Button } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title='Go to Todos' onPress={() => navigation.navigate('Todos')} />
      <Button title='Go to Details' onPress={() => navigation.navigate('Details')} />
    </View>
  )
}

export default HomeScreen