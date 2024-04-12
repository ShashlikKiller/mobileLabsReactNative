import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import City from '../Model/data/code/city';
import { Linking } from 'react-native';

const openInMaps = (cityName: string) => {
  const url = `http://maps.google.com/?q=${cityName}`;
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url);
    } else {
      console.log("Не удалось открыть Google Maps");
    }
  });
};

export default function CurrentCityScreen({ route }: { route: any }) {
    const { selectedCity } = route.params;

    return (
        <View>
            <Text>Город: {selectedCity.city}</Text>
            <Text>Почтовый индекс: {selectedCity.postal_code}</Text>
            <Text>Федеральный округ: {selectedCity.federal_district}</Text>
            <Text>Регион: {selectedCity.region}</Text>
            <Text>Часовой пояс: {selectedCity.timezone}</Text>
            <Text>Географическая широта: {selectedCity.geo_lat}</Text>
            <Text>Географическая долгота: {selectedCity.geo_lon}</Text>
            <Text>Население: {selectedCity.population}</Text>
            <Text>Год основания: {selectedCity.foundation_year}</Text>
            <Button title="Открыть в Google Maps" onPress={() => openInMaps(selectedCity.city)} />
        </View>
        
    );
}