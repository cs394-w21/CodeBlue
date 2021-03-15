import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';


const BeaconButton = ({navigation}) => {
  return (
    <View style={styles.settings}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ControlScreen', {color: '#21518C'})}>
        <MaterialCommunityIcons
          name="lighthouse"
          size={40}
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
    marginRight: 5,
    padding: 10
  }
})

export default BeaconButton;
