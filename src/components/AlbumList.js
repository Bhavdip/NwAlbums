import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

class AlbumList extends Component {
  //class level state
  state = { albums: [], isLoading: true };

  componentWillMount() {
    console.log('componentWillMount in AlbumList');
    //debugger;
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response =>
      this.setState({
        albums: response.data,
        isLoading: false
      })
    );
  }

  renderAlbums() {
    return this.state.albums.map(album => <AlbumDetails key={album.title} data={album} />);
  }

  render() {
    const { progressbarStyle } = styles;
    if (this.state.isLoading) {
      return (
        <View style={progressbarStyle}>
          <Text>Loading Album...</Text>
        </View>
      );
    }
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

const styles = {
  progressbarStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default AlbumList;
