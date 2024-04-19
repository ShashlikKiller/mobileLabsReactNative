import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MusicClassicScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Музыка / Классика</Text>
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

export default MusicClassicScreen;