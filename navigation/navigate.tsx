import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, CommonActions } from "@react-navigation/native";

// Страницы приложения для навигации:
import BearScreen from "./screens/BearScreen";;
import FinalBadScreen from "./screens/FinalBadScreen";
import FinalGoodScreen from "./screens/FinalGoodScreen";
import HareScreen from "./screens/HareScreen";
import WolfScreen from "./screens/WolfScreen";
import FoxScreen from "./screens/FoxScreen";
import IntroScreen from "./screens/IntroScreen";

const Stack = createStackNavigator();

export default function Navigate(initialScreen: string){
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={initialScreen}>
            <Stack.Screen
                name="BearScreen"
                component={BearScreen}
                options={{title: 'BearScreen'}}
                />
            <Stack.Screen
                name="FinalBadScreen"
                component={FinalBadScreen}
                options={{title: 'FinalBadScreen'}}
                />
            <Stack.Screen
                name="FinalGoodScreen"
                component={FinalGoodScreen}
                options={{title: 'FinalGoodScreen'}}
                />
            <Stack.Screen
                name="FoxScreen"
                component={FoxScreen}
                options={{title: 'FoxScreen'}}
                />
            <Stack.Screen
                name="HareScreen"
                component={HareScreen}
                options={{title: 'HareScreen'}}
                />
            <Stack.Screen
                name="IntroScreen"
                component={IntroScreen}
                options={{title: 'IntroScreen'}}
                />
            <Stack.Screen
                name="WolfScreen"
                component={WolfScreen}
                options={{title: 'WolfScreen'}}
                />
        </Stack.Navigator>
    </NavigationContainer>
    )
}
