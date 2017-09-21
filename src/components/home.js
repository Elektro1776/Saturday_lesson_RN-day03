import React, { Component } from 'react';

import {
  TouchableHighlight,
  StyleSheet,
  Platform,
  View,
  Text,
} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);

    this.press = this.press.bind(this);
  }
  press(name){
    this.props.navigator.navigation.navigate('Movie', { name });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>flix<Text style={{ color:'#ff4981' }}>.</Text></Text>
        {/*Each button will call the press function with a different movie name*/}
        <TouchableHighlight onPress={() => this.press('The Grand Budapest Hotel')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.movieText}>The Grand Budapest Hotel</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.press("Rosemary's Baby")} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.movieText}>Rosemary's Baby</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.press('Kill Bill')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.movieText}>Kill Bill</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.press('The Witch')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.movieText}>The Witch</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.press('Fantastic Mr. Fox')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.movieText}>Fantastic Mr. Fox</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.press('Nightmare Before Christmas')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.movieText}>Nightmare Before Christmas</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(76,217,175,1)'
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    marginTop: 75,
    marginBottom: 50,
    fontWeight: 'bold',
    color: '#fff6d1'
  },
  movieText: {
    fontSize: 20,
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-light' : 'Avenir-Light'
  },
  outerButton: {
    paddingVertical: 3,
    paddingHorizontal: 30
  },
  innerButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#c9f3e7',
    borderLeftWidth: 5,
    borderColor: '#ff4981'
  }
});
export default Home;
