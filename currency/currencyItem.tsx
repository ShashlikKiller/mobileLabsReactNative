import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const CurrencyItem: React.FC<{ item: Currency }> = ({ item }) => (
  <View style={styles.row}>
    <View style={styles.square}>
      <Text style={styles.value}>{item.Value[0]}</Text>
    </View>
    <View style={styles.rowname}>
      <Text style={styles.name}>{item.Name[0]}</Text>
      <View style={styles.circle}>
        <Text style={styles.char}>{item.CharCode[0]}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    flex: 1
  },
  rowname: {
    backgroundColor: '#393939',
    borderRadius: 25,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10
  },
  square: {
    width: 70,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#454545',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: '#454545',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000000',
  },
  name: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontSize: 22
  },
  value: {
    color: 'white',
    fontSize: 18
  },
  char: {
    color: 'white',
    fontSize: 20
  }
});

export default CurrencyItem;