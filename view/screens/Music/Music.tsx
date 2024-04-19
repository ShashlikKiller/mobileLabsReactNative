import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Импорт экранов жанра:
import MusicClassicScreen from './components/MusicClassicScreen';
import MusicDiscoScreen from './components/MusicDiscoScreen';
import MusicOSTScreen from './components/MusicOSTScreen';
import MusicPopScreen from './components/MusicPopScreen';
import MusicRockScreen from './components/MusicRockScreen';

const TopTab = createMaterialTopTabNavigator();

const MusicScreen = () => {
    return (
      <TopTab.Navigator>
        <TopTab.Screen name="Pop" component={MusicPopScreen} />
        <TopTab.Screen name="Disco" component={MusicDiscoScreen} />
        <TopTab.Screen name="Классика" component={MusicClassicScreen} />
        <TopTab.Screen name="Рок" component={MusicRockScreen} />
        <TopTab.Screen name="Саундтреки" component={MusicOSTScreen} />
      </TopTab.Navigator>
    );
  };
  
  export default MusicScreen;