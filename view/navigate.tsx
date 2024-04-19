import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, CommonActions } from "@react-navigation/native";

// Страницы приложения для навигации:
import BooksScreen from "./screens/Books/Books";
import MusicScreen from "./screens/Music/Music";
import NewsScreen from "./screens/News/News";

const Stack = createStackNavigator();

export default function Navigate(initialScreen: string){
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={initialScreen}>
            <Stack.Screen
                name="Books"
                component={BooksScreen}
                options={{title: 'BooksScreen'}}
                />
            <Stack.Screen
                name="Music"
                component={MusicScreen}
                options={{title: 'MusicBadScreen'}}
                />
            <Stack.Screen
                name="News"
                component={NewsScreen}
                options={{title: 'NewsScreen'}}
                />
        </Stack.Navigator>
    </NavigationContainer>
    )
}