import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/** IMPORT COMPONENTS **/
import Login from './Components/login'
import Register from './Components/register'
import Preference from './Components/Preferences'
import MainPage from './Components/MainPage'
import Commentaires from './Components/Commentaires'
const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Login}>
        <Stack.Screen name="LOGIN" component={Login}/>
        <Stack.Screen name="REGISTER" component={Register}/>
        <Stack.Screen name="PREFERENCE_CHOICE" component={Preference}/>
        <Stack.Screen name="MAINPAGE" component={MainPage}/>
        <Stack.Screen name="Commentaires" component={Commentaires}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}