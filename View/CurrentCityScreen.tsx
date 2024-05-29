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

export function CurrentCityScreen({ selectedCity }: {selectedCity: City | null }) {
  const city = selectedCity;

  if (city === null)
    {
      return (
        <View>
          <Text>Город не выбран.</Text>
        </View>
      )
    }

  return (
    <View>
      <Text>Город: {city.city}</Text>
      <Text>Почтовый индекс: {city.postal_code}</Text>
      <Text>Федеральный округ: {city.federal_district}</Text>
      <Text>Регион: {city.region}</Text>
      <Text>Часовой пояс: {city.timezone}</Text>
      <Text>Географическая широта: {city.geo_lat}</Text>
      <Text>Географическая долгота: {city.geo_lon}</Text>
      <Text>Население: {city.population}</Text>
      <Text>Год основания: {city.foundation_year}</Text>
      <Button title="Открыть в Google Maps" onPress={() => openInMaps(city.city)} />
    </View>
  );
}