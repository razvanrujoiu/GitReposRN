/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import {
  ActivityIndicator,
  FlatList,
  Image,
  ToastAndroid,
  Platform,
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { StackRouter, withNavigation } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';



import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { HomePage } from './HomePage';
import { DetailsPage } from './DetailsPage';
import { Dashboard } from './Dashboard';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export function HomeStackScreens({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Details" component={DetailsPage} />
    </Stack.Navigator>
  );
}

export function BottomTabs({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackScreens} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
    </Tab.Navigator>)
}

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}
