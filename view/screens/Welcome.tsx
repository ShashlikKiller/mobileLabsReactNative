import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Добро пожаловать!</Text>
      <Text style={styles.text}>Пожалуйста, выберите одну из вкладок на панели навигации.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink', // розовый фон
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default WelcomeScreen;