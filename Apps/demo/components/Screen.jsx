import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function Screen() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 4000);
  }, []);
  return (
    <View>
      {/* Not preferred way */}
      {/* <ActivityIndicator animating={isLoading} /> */}

      {/* Preferred Way */}
      {isLoading ? (
        <ActivityIndicator color="red" size="large" />
      ) : (
        <Text>Screen</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
