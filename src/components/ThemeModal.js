import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import Modal from 'modal-enhanced-react-native-web';
import firebase from '../firebase';

const ThemeModal = ({theme, navigation, isVisible, toggleModal, navigateTheme}) => {
  const [imageUrl, setImageUrl] = useState(undefined);

  useEffect(() => {
    firebase.storage()
      .ref('/' + theme.title + '.png')
      .getDownloadURL()
      .then((url) => {
        setImageUrl(url);
      })
      .catch((e) => console.log(e));
  }, [theme]);

  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      swipeDirection="left"
      onSwipe={toggleModal}
    >
      <ImageBackground
        // Button Linear Gradient
        style={styles.imageBackground}
        source={imageUrl}
      >
        <TouchableOpacity
          onPress={toggleModal}
          style={styles.closeBtn}
        >
          <Text style={styles.closeX}>X</Text>
        </TouchableOpacity>
        <View style={styles.textBox}>
          <Text style={styles.themeTitle}>{theme.title}</Text>
          <Text style={styles.themeDescription}>{theme.description}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigateTheme(theme.color)}
          style={styles.button}
        >
          <Text>{theme.buttonText}</Text>
        </TouchableOpacity>

      </ImageBackground>

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
  imageBackground: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    resizeMode: 'cover'
  },
  themeTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: '#e5e4e2'
  },
  themeDescription: {
    color: 'white',
    fontSize: 18,
    margin: 20
  },
  button: {
    backgroundColor: 'rgba(255,255,255, 0.6)',
    borderRadius: 10,
    padding: 10,
    borderColor: 'black',
    marginTop: 100
  },
  closeBtn: {
    backgroundColor: "rgba(70,62,63,0.5)",
    alignSelf: "flex-end",
    margin: 10,
    borderRadius: '50%',
    width: 20,
    alignItems: 'center'
  },
  closeX: {
    fontSize: 14,
    color: 'white'
  },
  textBox: {
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: 'center',
    width: '90%',
    borderRadius: '10%'
  }
})

export default ThemeModal;
