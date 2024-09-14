import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCards</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={require('../assets/images/cybercity.jpg')}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Cybercity</Text>
          <Text style={styles.cardLabel}>Gurgaon</Text>
          <Text style={styles.cardDescription}>
            Gurgaon is a city just southwest of New Delhi in northern India.
            It’s known as a financial and technology hub.
          </Text>
          <Text style={styles.cardFooter}>7 mins. away</Text>
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
    marginVertical: 10,
  },
  card: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  cardElevated: {
    alignItems: 'center',
    backgroundColor: 'lightblue',
    elevation: 5,
  },
  cardImage: {
    borderRadius: 5,
    marginBottom: 10,
  },
  cardBody: {},
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  cardLabel: {
    fontSize: 18,
    color: '#000',
    marginBottom: 15,
  },
  cardDescription: {
    fontSize: 16,
    color: '#000',
    marginBottom: 12,
  },
  cardFooter: {
    fontSize: 14,
    color: '#000',
  },
});
