/* @flow weak */

import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

//functional components/ static component
const Header = props => (
  <View style={styles.container}>
    <Text>I'm {props.screenTitle}</Text>
  </View>
);

Header.propTypes = {
  screenTitle: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
});

export default Header;
