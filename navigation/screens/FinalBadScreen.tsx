import { Button, View, Text, Image, Dimensions } from "react-native";

export default function FinalBadScreen({navigation}: {navigation: any}) {

    const tryAgain = () => {
      navigation.navigate('IntroScreen')
    }

    const windowWidth = Dimensions.get('window').width;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginTop: 30 }}>
        <Text>BAD ENDING</Text>

        <Image
            style={{ width: windowWidth -100, aspectRatio: 1, marginBottom: 50 }}
            source={{uri: 'https://1000logos.net/wp-content/uploads/2023/05/Skull-Emoji.png'}}
        />

        <Button
          title="Попытать счастье снова..."
          onPress={tryAgain}
          color={'#B6FF1B'}
        />

      </View>
    );
}