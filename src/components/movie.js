import React, { Component } from 'react';

import {
  TouchableHighlight,
  StyleSheet,
  Platform,
  Image,
  View,
  Text,
} from 'react-native';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: null,
    };
    this.handlePress = this.handlePress.bind(this);
  }

  // When the component mounts..
  componentDidMount() {
    // Call our fetchData function on the movie that was passed in as props
    const { params } = this.props.navigation.state;
    this.fetchData(params.name);
  }

  fetchData(movie) {
    // We pass the movie the user entered in into the URL for the API call.
    fetch('https://www.omdbapi.com/?t=' + movie + '&y=&plot=short&apikey=40e9cece')
    .then(response => response.json())
    .then((responseData) => {
      // After the data is received, we set this.state.movie to the result of the API call.
      console.log(responseData);
      this.setState({ movie: responseData, loading: false });
    })
    .catch(err => console.log(err));
  }

  // The handlePress function will return us to the previous page
  handlePress() {
    this.props.navigation.goBack();
  }

  render() {
    // Es6 destructuring on the params passed down on the props Object
    /**
      @const params <Object> The movie name passed from the Home screen component
    */
    const { params } = this.props.navigation.state;
    if (!this.state.loading) {
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>{params.name}</Text>
          </View>

          <Image
            style={styles.imageStyle}
            source={{ uri: this.state.movie.Poster }}
          />

          <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
            <View style={styles.infoTextContainer}>
              <Text style={styles.bigInfoText}>{this.state.movie.Rated}</Text>
              <Text style={styles.smallInfoText}>Rated</Text>
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.bigInfoText}>{this.state.movie.Year}</Text>
              <Text style={styles.smallInfoText}>Year</Text>
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.bigInfoText}>{this.state.movie.imdbRating}</Text>
              <Text style={styles.smallInfoText}>IMDB</Text>
            </View>
          </View>

          <Text style={styles.text}>{this.state.movie.Plot}</Text>

          <Text style={styles.bigLightText}>{this.state.movie.Director}</Text>
          <Text style={styles.bigLightText}>{this.state.movie.Genre}</Text>

          <View style={{flexDirection:'row', justifyContent:'center', margin: 40}}>
            <TouchableHighlight onPress={this.handlePress} style={{width:100}}>
              <View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'white', borderRadius: 50}}>
                <Text style={{color: 'rgba(76,217,175,1)', fontWeight: 'bold'}}>Go Back</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      );
    }
    else {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{ fontSize: 30, color: '#444', textAlign: 'center'}}>Loading {params.name} information!</Text>
          <TouchableHighlight onPress={this.handlePress}>
            <View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#63c0a6', borderRadius: 30}}>
              <Text>Go Back!</Text>
            </View>
          </TouchableHighlight>
        </View>
      );
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(76,217,175,1)'
  },
  infoTextContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  imageStyle: {
    height: 150,
    width: 360,
    alignSelf: "center",
    marginTop: (Platform.OS === 'ios') ? 10 : 0
  },
  bigInfoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white'
  },
  smallInfoText: {
    color: 'white',
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-light' : 'Avenir-Light'
  },
  bigLightText: {
    color: 'white',
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-light' : 'Avenir-Light',
    fontSize:25,
    textAlign:'center'
  },
  text: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    marginBottom: 20,
    color: 'white',
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-light' : 'Avenir-Light',
    textAlign: 'center'
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#35977a',
    height: 50,
  },
  title: {
    color: '#fff6d1',
    fontSize: 25,
    fontWeight: 'bold'
  }
});
export default Movie;
