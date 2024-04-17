import { Button, View, Text, Image, Dimensions } from "react-native";

export default function FinalGoodScreen({navigation}: {navigation: any}) {
    const tryAgain = () => {
        navigation.navigate('IntroScreen')
      }
  
      const windowWidth = Dimensions.get('window').width;
  
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginTop: 30 }}>
          <Text>GOOD ENDING</Text>
  
          <Image
              style={{ width: windowWidth -100, aspectRatio: 1, marginBottom: 50 }}
              source={{uri: 'https://steamuserimages-a.akamaihd.net/ugc/1018321569179470557/7F5368F893F43FADE9E9396130BC226450ECFF13/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'}}
          />
  
          <Button
            title="Победить еще раз"
            onPress={tryAgain}
            color={'#B6FF1B'}
          />
  
        </View>
      );
  }