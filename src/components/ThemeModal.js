import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'modal-enhanced-react-native-web';
import {LinearGradient} from 'expo-linear-gradient';

const ThemeModal = ({theme, navigation, isVisible, toggleModal, navigateTheme}) => {
  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      swipeDirection="left"
      onSwipe={toggleModal}
    >
      <LinearGradient
        // Button Linear Gradient
        colors={[`${theme.color}`, '#cccccc']}
        style={styles.gradient}>
        <TouchableOpacity
          onPress={toggleModal}
          style={styles.closeBtn}
        >
          <Text style={styles.closeX}>X</Text>
        </TouchableOpacity>
        <Text style={styles.themeTitle}>{theme.title}</Text>
        <Text style={styles.themeDescription}>{theme.description}</Text>
        <TouchableOpacity
          onPress={() => navigateTheme(theme.color)}
          style={styles.button}
        >
          <Text>Become {theme.title}</Text>
        </TouchableOpacity>

      </LinearGradient>

    </Modal >
  );
}
const styles = StyleSheet.create({
  modal: {
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  gradient: {
    height: '75%',
    width: '100%',
    alignItems: 'center'
  },
  themeTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: '#333333'
  },
  themeDescription: {
    fontSize: 18,
    color: 'white',
    margin: 20
  },
  button: {
    backgroundColor: 'rgba(255,255,255, 0.3)',
    borderRadius: 10,
    padding: 10,
    borderColor: 'black',
    marginTop: 100
  },
  closeBtn: {
    backgroundColor: "rgba(0,0,0,0.0)",
    alignSelf: "flex-end",
    margin: 10
  },
  closeX: {
    fontSize: 14
  }
})

export default ThemeModal;
