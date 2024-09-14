import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.container}>
        <View style={[styles.card]}>
          <Text style={styles.cardText}>C A R D</Text>
        </View>
        <View style={[styles.card]}>
          <Text style={styles.cardText}>C A R D</Text>
        </View>
        <View style={[styles.card]}>
          <Text style={styles.cardText}>C A R D</Text>
        </View>
        <View style={[styles.card]}>
          <Text style={styles.cardText}>C A R D</Text>
        </View>
        <View style={[styles.card]}>
          <Text style={styles.cardText}>C A R D</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    marginVertical: 10,
  },
  container: {
    backgroundColor: 'lightblue',
  },
  card: {
    height: 100,
    width: 100,
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#444444',
    elevation: 5,
  },
  cardText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
