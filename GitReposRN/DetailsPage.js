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
  Linking,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import Icon from 'react-native-vector-icons/Ionicons';
// Icon.loadFont();

export function DetailsPage({route, navigation}) {
  const {item} = route.params;
  // const forkIcon = Icon.getImageSourceSync('code-fork', 24, 'black');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffa6'}}>
      <View style={styles.topView}>
        <Image source={{uri: item.owner.avatar_url}} style={styles.image} />
        <Text style={styles.repoTitle}>{item.full_name}</Text>
        <Text style={styles.repoDescription}>{item.description}</Text>
        <TouchableOpacity>
          <Text
            style={{color: 'blue', textAlign: 'center'}}
            onPress={() => {
              Linking.openURL(item.html_url);
            }}>
            {item.html_url}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomView}>
        <View style={{flexDirection: 'row', margin: 12}}>
          <Text>Stars:</Text>
          <Text>{item.stargazers_count}</Text>
        </View>
        <View style={{flexDirection: 'row', margin: 12}}>
          <Text>Forks:</Text>
          <Text>{item.forks_count}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topView: {
    flex: 4,
    backgroundColor: '#dce775',
    borderBottomLeftRadius: 44,
    borderBottomRightRadius: 44,
  },
  bottomView: {
    flex: 2,
    backgroundColor: '#ffffa6',
  },
  image: {
    marginTop: 24,
    height: 150,
    width: 150,
    alignSelf: 'center',
    borderRadius: 150,
  },
  repoTitle: {
    textAlign: 'center',
    marginTop: 12,
    fontWeight: 'bold',
    fontSize: 18,
  },
  repoDescription: {
    margin: 12,
    textAlign: 'center',
  },
  url: {},
});
