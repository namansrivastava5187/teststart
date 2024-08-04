import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';

import WelcomeScreem from '../screens/WelcomeScreen'
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'
import WelcomeScreen from './screens/WelcomeScreen'


const stack = createNativeStackNavigator();

export default function appNavigation() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Home" options={{headerShown: false}} components={Homescreen} />
        <Stack.Screen name="Welcome" options={{headerShown: false}} components={WelcomeScreen} />
        <Stack.Screen name="Login" options={{headerShown: false}} components={LoginScreen} />
        <Stack.Screen name="SignUp" options={{headerShown: false}} components={SignUpScreen} />
    </Stack.Navigator>
   </NavigationContainer>
  )
}