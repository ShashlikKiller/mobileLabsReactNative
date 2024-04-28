import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import getData from './currency/getData';
import CurrencyItem from './currency/currencyItem';

export default function App() {
  const [data, setData] = useState<Currency[]>([]);
  useEffect(() => {
    getData().then(setData).catch(console.error);
  }, [])


  // useEffect(() => {
    // fetch('http://www.cbr.ru/scripts/XML_daily.asp')
    //   .then(response => response.arrayBuffer())
    //   .then((buffer) => {
    //     const utf8Data = iconv.decode(new Buffer(buffer), 'win1251');
    //     var parser = new xml2js.Parser();
    //     parser.parseString(utf8Data, (err: any, result: any) => {
    //       if (err) {
    //         console.error(err);
    //       } else {
    //         setData(result.ValCurs.Valute);
    //       }
    //     });
    //   })
    //   .catch((err) => {
    //     console.error('fetch failed', err);
    //   });
  // }, []);

  return (
    <>
    <StatusBar style='light' backgroundColor='#393939'/>
    <ScrollView style={{backgroundColor: '#232323'}}>
      <View style={styles.container}>
      <Text style={{color: '#FFFFFF', fontSize: 24}}> Курсы валют: </Text>
        {data.map((item, index) => (
          <CurrencyItem key={index} item={item}/>
        ))}
      </View>
   </ScrollView>
   </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: '#232323'
  }});