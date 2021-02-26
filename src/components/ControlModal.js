import React, {useState} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function ControlModal({handleClose, visible, children}) {
  console.log("visible: ", visible);
  return (
    <View>
      <TouchableOpacity onPress={handleClose}>
        <Text>Close</Text>
      </TouchableOpacity>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: rgba(0, 0, 0, 0.6),
  },
  modalMain: {
    position: "absolute",
    backgroundColor: white,
    width: "80%",
    height: auto,
    top: "50%",
    left: "50%"
  },
});

export default ControlModal;
