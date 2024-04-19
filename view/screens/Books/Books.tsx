import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Импорт вкладок:
import BooksNewScreen from './components/BooksNewScreen';
import BooksReadScreen from './components/BooksReadScreen';

const TopTab = createMaterialTopTabNavigator();

const BooksScreen = () => {
    return (
      <TopTab.Navigator>
        <TopTab.Screen name="Новые" component={BooksNewScreen} />
        <TopTab.Screen name="Прочитанные" component={BooksReadScreen} />
      </TopTab.Navigator>
    );
  };
  
  export default BooksScreen;