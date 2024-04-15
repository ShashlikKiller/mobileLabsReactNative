import React, {useState} from 'react';
import {Button, Modal, TextInput, FlatList, Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import Item from './item';

export default function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [inputTitle, setTitle] = useState('');
  const [inputQuantity, setQuantity] = useState('');

  const [inputTitleFocused, setInputTitleFocused] = useState(false);
  const [inputQuantityFocused, setInputQuantityFocused] = useState(false);

  const handleTitleFocus = () => {
    setInputTitleFocused(true);
  };
  
  const handleQuantityFocus = () => {
    setInputQuantityFocused(true);
  };

  const handleAddItem = () => {
    if (inputTitle.trim() === '' || inputQuantity.trim() === '') {
      Alert.alert('Ошибка!', 'Поля не могут быть пустыми.');
      return;
    }
    setItems([...items, new Item(inputTitle, inputQuantity)]);
    setTitle('');
    setQuantity('');
    setModalVisible(false);
  };

  const handleEditItem = (index) => {
    setCurrentItem(index);
    setTitle(items[index].title);
    setQuantity(items[index].quantity);
    setModalVisible(true);
  };

  const handleUpdateItem = () => {
    if (inputTitle.trim() === '' || inputQuantity.trim() === '') {
      Alert.alert('Ошибка!', 'Поля не могут быть пустыми.');
      return;
    }
    if (currentItem != null)
      {
    items[currentItem] = new Item(inputTitle, inputQuantity);
      }
    setItems([...items]);
    setTitle('');
    setQuantity('');
    setCurrentItem(null);
    setModalVisible(false);
  };

  const handleDeleteItem = (index) => {
    items.splice(index, 1);
    setItems([...items]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.maintitle}>Список покупок</Text>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Swipeable
             onSwipeableLeftOpen={() => handleDeleteItem(index)}
              renderLeftActions={() => <View style={{ width: 1 }} />}
            >
              <TouchableOpacity onPress={() => handleEditItem(index)} style={styles.item_btn}>
                <Text style={styles.item_title}>{item.title}</Text>
                <Text style={styles.item_quantity}>{item.quantity}</Text>
              </TouchableOpacity>
            </Swipeable>
          </GestureHandlerRootView>
        )}
      />
      <Modal visible={modalVisible} style={{alignSelf: 'center'}} animationType="slide">
        <View style={styles.modalview}>
          <Text style={styles.modaltext}>Товар:</Text>
          <TextInput
            value={inputTitle}
            onChangeText={setTitle}
            placeholder="Введите название"
            style={[
              styles.modal_input,
              inputTitleFocused && { color: 'black'},
            ]}
            onFocus={handleTitleFocus}/>
          <Text style={styles.modaltext}>Количество:</Text>
          <TextInput
            value={inputQuantity}
            onChangeText={setQuantity}
            placeholder="Введите количество"
            style={[
              styles.modal_input,
              inputQuantityFocused && { color: 'black'},
            ]}
            onFocus={handleQuantityFocus}/>
          <View style={styles.modal_btn_navbar}>
              <Button 
                title="Отмена" 
                onPress={() => setModalVisible(false)} 
                color="red"/>
              <Button
                title="OK"
                onPress={currentItem !== null ? handleUpdateItem : handleAddItem}
                color="green"/>
          </View>
        </View>
      </Modal>
      <View style={styles.add_btn_view}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.add_btn}>
          <Text style={{ color: 'black', fontSize: 45, fontWeight: 'bold' }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
)};

const styles = StyleSheet.create ({
    container: {
      flex: 1,
      padding: 20
    },
    maintitle: {
      alignContent: 'center', 
      fontSize: 30, 
      alignSelf: 'center', 
      marginTop: 20, 
      marginBottom: 20
    },
    add_btn: {
      width: 60, 
      height: 60, 
      backgroundColor: 'pink',
      borderWidth: 1,
      alignContent: 'center',
      borderColor: 'black',
      justifyContent: 'center',
      alignItems: 'center', 
      borderRadius: 22
    },
    add_btn_view: {
      backgroundColor: 'transparent',
      justifyContent: 'flex-end', 
      alignItems: 'flex-end', 
      padding: 20
    },
    item_btn: {
      borderColor: 'black',
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
      alignItems: 'flex-start', 
      justifyContent: 'center', 
      margin: 5, 
      backgroundColor: 'transparent'
    },
    item_title: {
      color: 'black', 
      fontSize: 18, 
      fontWeight: 'bold', 
      marginLeft: 10 
    },
    item_quantity: {
      color: 'rgba(0, 0, 0, 0.7)', 
      fontSize: 14, 
      marginLeft: 10 
    },
    modalview: {
      position: 'absolute',
      top: '20%', 
      left: '10%', 
      right: '10%', 
      bottom: '40%',
      borderColor: '#232323',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center'
    },
    modaltext: {
      marginBottom: 20,
      alignSelf: 'flex-start',
      marginLeft: 55 
    },
    modal_input: {
      width: '80%',
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20
    },
    modal_btn_navbar:
    {
      flexDirection:'row', 
      justifyContent: 'space-around',
       width: '100%'
    }
  })