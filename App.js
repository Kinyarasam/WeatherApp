import react, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WeatherScreen from './screens/WeatherScreen'; // Import your WeatherScreen component
import SettingsScreen from './screens/SettingsScreen'; // Import your SettingsScreen component
import WeatherDetailScreen from './screens/WeatherDetailScreen'; // Import the new WeatherDetailScreen component
// import dotenv from 'dotenv';

// dotenv.config();

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Weather">
        <Stack.Screen name="Weather" component={WeatherScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        {/* Add a screen for detailed weather information */}
        <Stack.Screen name="WeatherDetail" component={WeatherDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
