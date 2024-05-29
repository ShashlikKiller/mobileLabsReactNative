import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {CityListScreen} from './View/CityListScreen';
import { useEffect, useState } from 'react';
import {CurrentCityScreen} from './View/CurrentCityScreen';
import City from './Model/data/code/city';


export default function App() {
  const [orientation, setOrientation] = useState('PORTRAIT');
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  useEffect(() => {
    Dimensions.addEventListener('change', ({ window: { width, height } }) => {
      setOrientation(width > height ? 'LANDSCAPE' : 'PORTRAIT');
    });
  }, []);


  return (
    <View style={styles.container}>
      {orientation === 'PORTRAIT' && <CityListScreen setSelectedCity={setSelectedCity} />}
      {orientation === 'LANDSCAPE' && (
        <View style={styles.landscapeContainer}>
          <CityListScreen setSelectedCity={setSelectedCity}/>
          <CurrentCityScreen selectedCity={selectedCity} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  landscapeContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});
