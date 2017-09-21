import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation';

import {
  TouchableHighlight,
  Button,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Home from '../components/home';
import Movie from '../components/movie';
import Splash from '../components/splash';

const styles = StyleSheet.create({
  header: {
    height: 79,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    color: '#444',
  }
});

const MasterNavigator = StackNavigator({
  Splash: {
    screen: (navigation) => <Splash navigator={navigation} />,
  },
  Home: {
    screen: (navigation) => <Home navigator={navigation} />,

    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft:(
          <Button
            onPress={() => navigation.navigate('Splash')}
            style={{ backgroundColor: 'rgba(76,217,175,1)' }}
            title={'Splash'}
          />
        ),
    })
  },
  Movie: {
    screen: Movie,
    navigationOptions: {
      title: 'Movie'
    }
  },
});

export default MasterNavigator;
