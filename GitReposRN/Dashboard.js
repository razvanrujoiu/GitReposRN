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

export function Dashboard({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{backgroundColor: 'black', height: 200}}>
          <Text style={styles.greeting}>Bonjour Lionel !</Text>
          <TouchableOpacity
            style={styles.demarrerBtn}
            onPress={() => {
              alert('Demarre');
            }}>
            <Text style={styles.demarrer}>Demarrer</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            height: 200,
            margin: 18,
            borderRadius: 12,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                marginTop: 16,
                marginLeft: 12,
              }}>
              Cette semaine
            </Text>

            <Text>Go</Text>
          </View>
          <View style={{flexDirection: 'row'}}></View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: '#d3d3d3',
  },
  greeting: {
    color: 'white',
    marginTop: 24,
    marginLeft: 12,
    fontSize: 20,
    fontWeight: 'bold',
  },
  demarrer: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 18,
    fontSize: 18,
    fontWeight: 'bold',
  },
  demarrerBtn: {
    backgroundColor: 'orange',
    marginLeft: 44,
    marginRight: 44,
    marginTop: 55,
    height: 60,
    borderRadius: 30,
  },
});
