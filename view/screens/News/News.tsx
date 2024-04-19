import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNewsContext } from '../../../model/newsContext';
import {useFocusEffect} from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

function NewsScreen() {
  const { setUnreadNewsCount, stopTimer, startTimer } = useNewsContext();

  useFocusEffect(
    React.useCallback(() => {
      stopTimer();

      return startTimer; // возобновляем таймер при уходе с экрана
    }, [stopTimer, startTimer])
  );

  return (
    <View style={styles.container}>
      <Ionicons name="newspaper" size={30} color="#000" style={styles.icon} />
      <Text style={styles.title}>Новости</Text>
      <TouchableOpacity style={styles.button} onPress={() => setUnreadNewsCount(0)}>
        <Text style={styles.buttonText}>Очистить новости</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5ECD4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    marginTop: 500,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default NewsScreen;