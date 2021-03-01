import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Raleway_800ExtraBold } from '@expo-google-fonts/raleway';

const Logo = () => {
  return (
    <Text style={styles.logo}>mybeacon</Text>
  );
};

const styles = StyleSheet.create({
  logo: {
    fontFamily: 'Raleway_800ExtraBold',
    fontSize: 30,
    color: '#21518c',
    marginBottom: 20,
  }
});

export default Logo;
