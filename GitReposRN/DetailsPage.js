import React, {Component} from 'react';
import type {Node} from 'react';
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


import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';

export function DetailsPage({ navigation }) {
    return (<View style = {{ flex: 1 }}>
        <Text>Hello world</Text>
    </View>)
    
}

