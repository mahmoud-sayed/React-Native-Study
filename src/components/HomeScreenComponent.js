import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HomeScreenComponent = () => {
  return (
    <Text style={style.textStyle}>HomeScreenComponent</Text>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: '#555'
  }
});

export default HomeScreenComponent;