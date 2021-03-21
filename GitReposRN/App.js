/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import type {Node} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
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

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/search/repositories?q=language:javascript&order=desc&sort=stars')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.items });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;

    return (
        <View style = {{ flex: 1, padding: 24 }}>
          { isLoading ? <ActivityIndicator/> : (
            <FlatList
              data = { data }
              keyExtractor = {( { id }, index) => id}
              renderItem = { ( {item}) => (
                <Text> {item.name} </Text>
              )}
            />
          )}
        </View>
    )
  }
}


const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  item : {
    backgroundColor: '#f9c3bb',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 12,
  }
});
