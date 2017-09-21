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
/**
 NOTE: There are two ways to render a Scene.
  1.  Either by declaring the screen as a method that gets passed the navigation
      object and returns a Component.
  2.  Or by making the screen a noramal property that has the Imported Component
      simply as its value.
  This is important in how you access the navigation object in your other screens
*/
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
            color='rgba(76,217,175,1)'
            title='Splash'
          />
        ),
    })
  },
  Movie: {
    screen: Movie,
    navigationOptions: {
      title: 'Movie',
    },
  },
});

export default MasterNavigator;
