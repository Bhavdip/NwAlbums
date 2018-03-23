import React from 'react';
import { Image, View, Text, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

//we take a fucntion component

const AlbumDetails = ({ data }) => {
  const { title, artist, thumbnail_image, image, url } = data;
  const {
    headerContentsStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    headerTitleStyle,
    imageStyle
  } = styles;
  //debugger;
  return (
    <Card record={data}>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentsStyle}>
          <Text style={headerTitleStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button onClickListener={() => Linking.openURL(url)}>click Me !!!</Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentsStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTitleStyle: {
    fontSize: 16
  },
  thumbnailStyle: {
    width: 60,
    height: 60
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetails;
