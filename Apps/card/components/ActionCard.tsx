import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  async function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Action Card</Text>
      <View style={(styles.card, styles.elevatedCard)}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>Lotus Temple, New Delhi</Text>
        </View>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Just like every year, Javascript brings new features
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => openWebsite('https://google.com')}>
            <Text style={styles.socialLinks}> Google </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => openWebsite('https://facebook.com')}>
          <Text style={styles.socialLinks}>Facebook</Text>
        </TouchableOpacity>
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
  card: {},
  elevatedCard: {},
  headingContainer: {},
  headerText: {
    color: '#000',
  },
  cardImage: {
    height: 300,
  },
  bodyContainer: {},
  footerContainer: {},
  socialLinks: {
    color: '#000',
    fontSize: 20,
    backgroundColor: '#ff8585',
  },
});
