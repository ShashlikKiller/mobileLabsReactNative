import 'react-native-gesture-handler';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import City from '../Model/data/code/city';
import DropDownPicker from 'react-native-dropdown-picker';
import cityData from '../cities.json'
  
  interface DropdownComponentProps {
    data: City[];
    onSelect: (value: City) => void;
  }
  
  const DropdownComponent: React.FC<DropdownComponentProps> = ({ data, onSelect }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<string | null>(null);
    const [items, setItems] = useState<City[]>([]);
    const [searchText, setSearchText] = useState('');
    useEffect(() => {
        setItems(data)
    }, [])
    
    const filteredData = data.filter(item =>
        item.city && item.city.toLowerCase().includes(searchText.toLowerCase())
      );
  
      const handleChangeValue = (value: string | null) => {
        setValue(value);
        if (value !== null) {
            const selectedCity = data.find(city => city.id === value);
            if (selectedCity) {
                onSelect(selectedCity);
            }
        }
    };
  
    return (
      <View style={styles.container}>
        <DropDownPicker style={{flex: 1, width: 300}}
          open={open}
          value={value}
          items={filteredData.map(item => ({ label: item.city, value: item.id }))}
          setOpen={setOpen}
          onChangeValue={handleChangeValue}
          searchable={true}
          onChangeSearchText={setSearchText}
          searchPlaceholder="Поиск"
          multiple={false}
          setValue={setValue}
          placeholder="Выберите город"
        />
      </View>
    );
  };

export default function CityListScreen({ navigation }: { navigation: any }) {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [loading, setLoading] = useState(true);

  const loadScene = () => {
    if (selectedCity) {
      console.log('selected')
      navigation.navigate('CurrentCityScreen', { selectedCity });
    }
  };

    const [data, setData] = useState<City[]>([]);

    useEffect(() => {

      const cities = cityData.map((data: any, index: number) => new City(index.toString(), data));
      setData(cities);
      setLoading(false);
      // readCityData()
      //   .then((cities) => {
      //     setData(cities);
      //     setLoading(false);
      //     console.log(cities[1]);
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
    }, []);
  
  return (
<View style={styles.container}>
  <DropdownComponent data={data} onSelect={setSelectedCity} />
  <TouchableOpacity onPress={loadScene} style={styles.button}>
    <Text style={styles.buttonText}>Выбрать город</Text>
  </TouchableOpacity>
</View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#F5F5F5',
    },
    button: {
      marginTop: 16,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      backgroundColor: '#232323',
      alignItems: 'center',
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '600',
    },
  });