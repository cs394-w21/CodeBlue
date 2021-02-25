import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import ControlScreen from '../screens/ControlScreen';


const BeaconButton = ({navigation}) => {
  return (
    <View style={styles.settings}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ControlScreen')}>
        <MaterialCommunityIcons
          name="lighthouse"
          size={24}
          color="black" />
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  settings: {
    height: 20,
    alignItems: 'flex-end',
    marginTop: 5,
    marginRight: 5
  }
})

export default BeaconButton;
