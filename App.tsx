import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

// Страницы приложения для навигации:
import BooksScreen from "./view/screens/Books/Books";
import MusicScreen from "./view/screens/Music/Music";
import NewsScreen from "./view/screens/News/News";
// Класс таймера:
import { NewsProvider, useNewsContext } from "./model/newsContext";

const Tab = createBottomTabNavigator();

export default function App(initialScreen: string){
    return (
      <NewsProvider>
      <StatusBar hidden={true}/>
      <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName: any;

                switch (route.name) {
                  case 'Музыка':
                    iconName = focused ? 'musical-notes' : 'musical-notes-outline';
                    break;
                  case 'Книги':
                    iconName = focused ? 'book' : 'book-outline';
                    break;
                  case 'Новости':
                    iconName = focused ? 'newspaper' : 'newspaper-outline';
                    break;
                  default:
                    iconName = 'apps';
                    break;
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
              tabBarStyle: { paddingBottom: 5 }
            })}
          >
            <Tab.Screen name="Музыка" options={{ headerShown: false }} component={MusicScreen} />
            <Tab.Screen name="Книги" options={{ headerShown: false }} component={BooksScreen} />
            <Tab.Screen name="Новости" options={({ route }) => ({
              headerShown: false,
              tabBarBadge: useNewsContext().unreadNewsCount > 0 ? useNewsContext().unreadNewsCount : undefined
              })} component={NewsScreen} 
            />
          </Tab.Navigator>
        </NavigationContainer>
        </NewsProvider>
          
    )}