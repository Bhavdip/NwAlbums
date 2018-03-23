import React from 'react';
import { View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const albums = () => (
  <View style={{ flex: 1 }}>
    <Header screenTitle={'Albums'} />
    <AlbumList />
  </View>
);

export default albums;
