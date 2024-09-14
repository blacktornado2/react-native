import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function QuizItem({sno, question}) {
  return (
    <View>
      <Text style={styles.quizItem}>
        {sno}. {question}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  quizItem: {
    padding: 8,
    color: 'black',
    fontSize: 15,
  },
});
