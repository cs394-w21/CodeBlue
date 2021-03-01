import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'modal-enhanced-react-native-web';
import { LinearGradient } from 'expo-linear-gradient';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const ThemeModal = ({ theme, navigation, isVisible, toggleModal, navigateTheme }) => {
  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      swipeDirection="left"
      onSwipe={toggleModal}
    >

      <LinearGradient
        // Button Linear Gradient
        colors={[`${theme.color}`, 'white']}
        style={styles.gradient}>
        <Text style={styles.themeTitle}>{theme.title}</Text>
        <TouchableOpacity
          onPress={navigateTheme}
          style={styles.button}
        >
          <Text>Select</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={toggleModal}
          style={styles.button}
        >
          <Text>Close</Text>
        </TouchableOpacity> */}
      </LinearGradient>

    </Modal>
  );
}
const styles = StyleSheet.create({
  modal: {
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  gradient: {
    height: '100%',
    width: '100%',
    alignItems: 'center'
  },
  themeTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    borderColor: 'black',
    margin: 5
  },
})

export default ThemeModal;