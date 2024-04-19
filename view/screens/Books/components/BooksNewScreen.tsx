import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BooksNewScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Новые книги</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0FFF0',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default BooksNewScreen;