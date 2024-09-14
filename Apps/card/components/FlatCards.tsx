import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.redCard]}>
          <Text style={styles.cardText}>RED</Text>
        </View>
        <View style={[styles.card, styles.greenCard]}>
          <Text style={styles.cardText}>GREEN</Text>
        </View>
        <View style={[styles.card, styles.blueCard]}>
          <Text style={styles.cardText}>BLUE</Text>
        </View>
        <View style={[styles.card, styles.brownCard]}>
          <Text style={styles.cardText}>BROWN</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 12,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'orange',
    flexWrap: 'wrap',
  },
  card: {
    height: 100,
    width: 100,
    marginLeft: 10,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    color: 'white',
    fontWeight: 'bold',
  },
  redCard: {
    backgroundColor: 'red',
  },
  greenCard: {
    backgroundColor: 'green',
  },
  blueCard: {
    backgroundColor: 'blue',
  },
  brownCard: {
    backgroundColor: 'brown',
  },
});
