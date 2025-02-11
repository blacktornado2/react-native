import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  Button,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

import {toDegreeCelsius} from './utils';

export default function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeather = async () => {
    setIsLoading(true);
    console.log('clicked', city);
    if (city) {
      try {
        const {data} = await axios({
          method: 'get',
          url: `https://open-weather13.p.rapidapi.com/city/${city}/EN`,
          headers: {
            'x-rapidapi-key':
              'f7088f9852mshb513e8e0f8a3984p18507cjsn3ea43bd18b96',
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
          },
        });
        const temperatureInFahrenheit = data.main.temp;
        const temperature = toDegreeCelsius(temperatureInFahrenheit);
        setWeather({temperature});
        console.log(data);
      } catch (error) {
        console.log('ERROR: ', error?.message);
      }
    }
    setIsLoading(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Enter your city</Text>
      <TextInput style={styles.input} onChangeText={setCity} value={city} />
      <Button title="Submit" onPress={fetchWeather} />
      {isLoading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <Text style={styles.temperatureTitle}>
          Temperature : {weather?.temperature}&deg;C
        </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    justifyContent: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 5,
    borderRadius: 4,
    marginHorizontal: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  temperatureTitle: {
    fontSize: 18,
    marginVertical: 10,
    marginHorizontal: 6,
    color: 'black',
  },
});
