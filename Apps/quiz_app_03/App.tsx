import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, Text, View} from 'react-native';
import axios from 'axios';

import QuizItem from './components/QuizItem';

export default function App() {
  const [quiz, setQuiz] = useState([]);

  const getQuiz = async () => {
    const {data} = await axios.get(
      'https://current-affairs-of-india.p.rapidapi.com/today-quiz',
      {
        headers: {
          'x-rapidapi-key':
            'f7088f9852mshb513e8e0f8a3984p18507cjsn3ea43bd18b96',
          'x-rapidapi-host': 'current-affairs-of-india.p.rapidapi.com',
        },
      },
    );
    setQuiz(data);
  };

  useEffect(() => {
    getQuiz();
  }, []);

  return (
    <SafeAreaView>
      <Text style={styles.header}>Today's Quiz</Text>
      <View style={styles.quiz}>
        {quiz.length > 0 ? (
          quiz.map((item, index) => {
            return <QuizItem sno={index + 1} question={item.question} />;
          })
        ) : (
          <Text style={styles.loader}>Loading...</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    color: 'black',
    marginVertical: 20,
    paddingHorizontal: 20,
    fontWeight: 'bold',
  },
  quiz: {
    // backgroundColor: 'lightblue',
  },

  loader: {
    fontSize: 20,
    justifyContent: 'center',
  },
});
