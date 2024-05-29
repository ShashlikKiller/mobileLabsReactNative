import 'react-native-gesture-handler';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button, View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, Dimensions } from 'react-native';
import City from '../Model/data/code/city';
import DropDownPicker from 'react-native-dropdown-picker';
import cityData from '../cities.json'
import { CurrentCityScreen } from './CurrentCityScreen';
  
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

  export function CityListScreen({ setSelectedCity }: {setSelectedCity: (city: City) => void }) {
    const [selectedCity, _setSelectedCity] = useState<City | null>(null);
    const [loading, setLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [orientation, setOrientation] = useState(Dimensions.get('window').width > Dimensions.get('window').height ? 'LANDSCAPE' : 'PORTRAIT');

    useEffect(() => {
      const updateOrientation = () => {
        setOrientation(Dimensions.get('window').width > Dimensions.get('window').height ? 'LANDSCAPE' : 'PORTRAIT');
      };
      Dimensions.addEventListener('change', updateOrientation);
    }, []);
  
    const loadScene = () => {
      if (selectedCity) {
        console.log('selected')
        setModalVisible(true);
      }
    };
  
    const [data, setData] = useState<City[]>([]);
  
    useEffect(() => {
      const cities = cityData.map((data: any, index: number) => new City(index.toString(), data));
      setData(cities);
      setLoading(false);
    }, []);
    
    return (
      <View style={styles.container}>
        <View style={{zIndex: 10}}>
        <DropdownComponent data={data} onSelect={(city: City) => {
          setSelectedCity(city);
          _setSelectedCity(city);
        }} />
        </View>
        {orientation === 'PORTRAIT' && (
        <TouchableOpacity onPress={loadScene} style={styles.button}>
          <Text style={styles.buttonText}>Выбрать город</Text>
        </TouchableOpacity>
      )}
        <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <CurrentCityScreen selectedCity={selectedCity} />
      </Modal>
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