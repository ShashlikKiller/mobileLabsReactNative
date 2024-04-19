import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const MusicPopScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Музыка / Поп</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF0F0', // розовый фон
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default MusicPopScreen;