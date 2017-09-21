import React, { Component } from 'react';

import {
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native';

import popcornImg from '../../images/popcorn.png';


class Splash extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    console.log(' Did mount!');
    const self = this;
    this.transitionOne = setTimeout(() => {
      self.props.navigator.navigation.navigate('Home');
    }, 2000);
  }

  componentWillReceiveProps(newProps) {
    console.log(' WHAT IS THE NEW PROPS', newProps);
    console.log(' WHAT ARE THE OLD PROPS', this.props);

  }
  componentWillUnmount() {
    console.log(' UNMOUNTED!');
    clearTimeout(this.transitionOne);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={popcornImg} style={{ height: 200, width: 200 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(76,217,175,1)'
  }
});
export default Splash;
