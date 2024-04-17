import React from 'react';
import { View, Text, Image, Button, Dimensions, StyleSheet } from 'react-native';

interface PageTemplateProps {
    title: string;
    imageUri: string;
    button1Text: string;
    button2Text: string;
    button1Action: () => void;
    button2Action: () => void;
  }

  const windowWidth = Dimensions.get('window').width;

  const PageTemplate: React.FC<PageTemplateProps> = ({ title, imageUri, button1Text, button2Text, button1Action, button2Action }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginTop: 30 }}>
        <Image
            style={{ width: windowWidth -100, aspectRatio: 1 }}
            source={{uri: imageUri}}
        />
        <Text style={{fontSize: 19, margin: 10}}>{title}</Text>
        <View style={{position: 'absolute', flexDirection: 'row', width: '90%', justifyContent: 'space-between', bottom: 20}}>
        <Button
            title={button1Text}
            onPress={button1Action}
        />
        <Button
            title={button2Text}
            onPress={button2Action}
        />
        </View>
  </View>
);

const styles = StyleSheet.create({
    container: {

    }
})

export default PageTemplate;