import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Modal from 'modal-enhanced-react-native-web';

const ThemeModal = ({theme, navigation, isVisible, toggleModal}) => {
  return (
    <Modal
      isVisible={isVisible} 
    >
      <Text>{theme.title}</Text>
      <Text>{theme.color}</Text>
      <TouchableOpacity>
        <Text>Select</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={toggleModal} 
      >
        <Text>Close</Text>
      </TouchableOpacity>
    </Modal>
  );
}


export default ThemeModal;