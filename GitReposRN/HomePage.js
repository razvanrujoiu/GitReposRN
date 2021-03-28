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

import { useNavigation } from '@react-navigation/native'


import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';

import { DetailsPage } from './DetailsPage';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export class HomePage extends Component {
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

    componentWillUnmount() {
      // fix Warning: Can't perform a React state update on an unmounted component
      this.setState = (state,callback)=>{
          return;
      };
  }
  
    customCell = (item) => {
      return (<TouchableOpacity style = {styles.button} onPress = { () => { this.onCellPress() }} >
        <Text style = {{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}> {item.name} </Text>
        <Text style = {{ marginTop: 8 }}> {item.description} </Text>
        <Image source = {{ uri: item.owner.avatar_url }} style = {{ marginTop: 12, height : 100, width: 100, alignSelf: 'center', borderRadius: 24 }}></Image>
      </TouchableOpacity>)
    }
  
    onCellPress = () => {
        this.props.navigation.push('Details');
    }
  
    render() {
      
      const { data, isLoading } = this.state;
  
      return (
          <View style = { [{ backgroundColor: '#ffffa6'}, styles.sectionContainer] }>
            { isLoading ? <ActivityIndicator/> : (
              <FlatList
                data = { data }
                keyExtractor = {( { id }, index) => id}
                renderItem = { ( {item}) => this.customCell(item) }
              />
            )}
          </View>
      )
    }
  }
    
  const styles = StyleSheet.create({
    sectionContainer: {
      flex: 1,
      marginTop:  32,
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
    },
    button: {
      flex: 1,
      flexDirection : "column",
      margin: 8,
      backgroundColor: '#dce775',
      padding: 12,
      borderRadius: 12
    }
  });
  