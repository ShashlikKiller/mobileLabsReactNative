import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function App() {
let [error, setError] = useState<string | null>(null);
let [contacts, setContacts] = useState<Contacts.Contact[]>();
let [status_str, setStatus] = useState<string>("");

const getContacts = async () => {
const {status} = await Contacts.requestPermissionsAsync();
setStatus(status);
if (status === 'granted') 
{
  const { data } = await Contacts.getContactsAsync({
  fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers]});
  if (data.length > 0) setContacts(data);
  else setError('No contacts found.');
} 
else setError('No permission.');
}

useEffect(() => {
getContacts();
}, []);

if (status_str == "granted") return (
    <View style={styles.container}>
      <Text style={styles.header}>Список контактов</Text>
      {contacts?.map((contact, index) => (
        <View key={index} style={styles.contactCard}>
          <Text style={styles.name}>Имя: {contact.name}</Text>
          {contact.phoneNumbers?.map((phoneNumber, i) => (
            <View key={i} style={styles.phoneNumberRow}>
              <Text style={styles.phoneNumber}>Номер телефона: {phoneNumber.number}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
  else return (
    <View style={styles.container}>
      <Text style={styles.header}> {error}</Text>
      <Button title="Разрешить доступ к контактам" onPress={getContacts} />
    </View>
  );
  };
  
  const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#000',
  padding: 10
  },
  header: {
  fontSize: 24,
  color: '#fff',
  marginBottom: 10
  },
  contactCard: {
  backgroundColor: '#333',
  borderRadius: 10,
  padding: 10,
  marginBottom: 10
  },
  name: {
  color: '#fff',
  fontSize: 18,
  marginBottom: 5
  },
  phoneNumberRow: {
  backgroundColor: '#555',
  borderRadius: 5,
  padding: 5,
  marginBottom: 5
  },
  phoneNumber: {
  color: '#fff'
  }});