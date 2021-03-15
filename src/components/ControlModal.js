import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native';

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

export default ControlModal;
