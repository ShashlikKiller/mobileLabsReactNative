import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, CommonActions } from "@react-navigation/native";
import CityListScreen from "./CityListScreen";
import CurrentCityScreen from "./CurrentCityScreen"

const Stack = createStackNavigator();

export default function Navigate(initialScreen: string){
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={initialScreen}>
            <Stack.Screen
                name="CityListScreen"
                component={CityListScreen}
                options={{title: 'Выбор города'}}
                />
            <Stack.Screen
                name="CurrentCityScreen"
                component={CurrentCityScreen}
                options={{title: 'Выбранный вами город'}}
                />
        </Stack.Navigator>
    </NavigationContainer>
    )
}