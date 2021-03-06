import React, {createContext, useContext, useState, useEffect} from 'react';
import {Button, ScrollView, SafeAreaView, Text, View, FlatList, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import BeaconButton from '../components/BeaconButton';
import {useFonts, Raleway_800ExtraBold} from '@expo-google-fonts/raleway';

import firebase from '../firebase';
import UserContext from '../../UserContext';
import Logo from '../components/Logo';
import ThemeModal from '../components/ThemeModal';

let font = 'sans-serif';

const db = firebase.database().ref();

const ThemeScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const user = useContext(UserContext);
  const [fontsLoaded] = useFonts({
    Raleway_800ExtraBold
  });

  const [windowWidth, setWindowWitdth] = useState(Dimensions.get("window").width);

  useEffect(() => {
    function handleResize() {
      setWindowWitdth(Dimensions.get("window").width);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSignout = () => {
    firebase.auth().signOut();
    navigation.navigate('SignInScreen');
  }

  const handleSignin = () => {
    navigation.navigate('SignInScreen');
  }

  const themeList =
  [{title: "excited", color: "#ce51c6", description: "Excitement is a feeling and mood full of activity, joy, exhilaration and upheaval.\n\nAromatherapy: Blend of Grapefruit, Bergamot and Lemon\nLight Status: Red\nPlaying: Beach Waves"},
  {title: "chill", color: "#72b583", description: "By finding balance in your everyday life, you can bring so much positivity and light to your current mood\n\nAromatherapy: Blend of Clove, Patchouli, Sandalwood\nLight Status: Green\nPlaying: Japanese Garden"},
  {title: "happy", color: "#eac752", description: "The key to being happy is knowing you have the power to choose what to accept and what to let go\n\nAromatherapy: Rose\nLight Status: Blend of Reds\nPlaying: Love is in the air"},
  {title: "focused", color: "#27D507", description: "The secret of change is to focus all your energy, not on fighting the old, but on building the new\n\nAromatherapy: Blend of Wintergreen, Rosemary and Peppermint\nLight Status: Lime Green\nPlaying: Soothing Sounds"},
  {title: "calm", color: "#72bbe2", description: "A calm heart is always less stressful. Free your mind and heart from anxiety, anger and have peace within your soul\n\nAromatherapy: Blend of Lavender\nLight Status: Blue\nPlaying: Nature Waves"},
  {title: "relaxed", color: "#c59cd6", description: "To relax means to liberate the mind, the body, or both.  Relaxing can quiet your mind, make you feel peaceful and live in the present moment. Take a deep breath, and enjoy life\n\nAromatherapy: Grapefruit\nPlaying: Peaceful Waterfall"},
  {title: "motivated", color: "#64b6b3", description: "Motivation reflects something unique about each one of us and allows us to gain valued outcomes like improved performance, enhanced well-being, personal growth, and a sense of purpose\n\nAromatherapy: Bergamont, Tangeringe, LIme\nLight Status: Cyan\nPlaying: Morning Glory"},
  {title: "energized", color: "#e2a862", description: "Energize means to feel enthusiasm and determination to do something. The higher your energy level, the more efficient your body and the better you feel\n\nAromatherapy: Frankincense\nLight Status: Orange\nPlaying: Feeling Strong"},
  {title: "empowered", color: "#9242b7", description: "Empowerment reflects something unique about each one of us and allows us to gain valued outcomes like improved performance, enhanced well-being, personal growth, and a sense of purpose\n\nAromatherapy: Bergamont, Tangeringe, and Lime\nLight Status: Purple\nPlaying: Winners Circle"},
  {title: "romantic", color: "#da3a7d", description: "Romance is a powerful force that makes you feel connected. You always gain by giving love\n\nAromatherapy: Rose\nLight Status: Pink\nPlaying: Love is in the Air"}];
  const [selectedTheme, setSelectedTheme] = useState(themeList[0]);

  if (fontsLoaded) {
    font = 'Raleway_800ExtraBold'
  }

  /**
   * open and close modal
   */
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  }

  /**
   * navigation functions for other screens
   */
  const handlePress = (theme) => {
    setModalVisible(true);
    setSelectedTheme(theme);
  }
  const createNewTheme = () => {
    navigation.navigate('CreateThemeScreen');
  }
  const navigateTheme = (color) => {
    navigation.navigate('ControlScreen', {color: color});
    setModalVisible(false);
  }

  /**
   * Item for displaying themes 
   */
  const Item = ({title, color, description}) => (
    <TouchableOpacity
      onPress={() => handlePress({title, color, description})}
      style={[styles.item, {backgroundColor: `${color}`, width: windowWidth * 0.45}]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity >
  );
  const renderItem = ({item}) => (
    <Item title={item.title} color={item.color} description={item.description}/>
  );
  return (
    <ScrollView>
      <ThemeModal isVisible={modalVisible} theme={selectedTheme} toggleModal={toggleModal} navigateTheme={navigateTheme} />
      <BeaconButton navigation={navigation} />
      <SafeAreaView style={styles.container}>
        <Logo/>
        <View style={styles.userSection}>
          <View>
            <Text style={styles.textStyle}>Hi {user ? user.name : 'guest'},</Text>
          </View>
          <View>
            {user ? <Button title="Logout" color="#448aff" onPress={handleSignout}/> 
            : <Button title="signin" color="#448aff" onPress={handleSignin}/>}
          </View>
        </View>
        <Text style={styles.textBold}>how would you like to feel?</Text>
        <View style={styles.themeBoxes}>
          <FlatList
            numColumns={2}
            data={user ? user.themeList : themeList}
            renderItem={renderItem}
            keyExtractor={item => item.title}
          />
        </View>
      </SafeAreaView>
      <TouchableOpacity
        onpress={createNewTheme}
      />
    </ScrollView>
  )

};

const styles = StyleSheet.create({
  item: {
    //backgroundColor: '#21518C',
    height: 100,
    justifyContent: 'center',
    marginTop: 15,
    borderRadius: 3,
    marginLeft: 5,
    marginRight: 5
  },
  userSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 10,
    margin: 10
  },
  themeBoxes: {
    alignSelf: 'center',
    textAlign: 'center',
  },
  textStyle: {
    fontFamily: "Avenir",
    fontSize: 20,
    fontWeight: "500",
    color: 'grey',
    marginTop: 10,
    marginBottom: 10
  },
  textBold: {
    fontFamily: "Avenir",
    color: '#21518C',
    fontWeight: "900",
    fontSize: 25
  },
  buttonText: {
    fontFamily: "Avenir",
    color: 'white',
    fontWeight: "bold",
    fontSize: 22
  },
  logo: {
    fontFamily: font,
    fontSize: 15,
    color: '#21518c',
    marginBottom: 20
  },
})


export default ThemeScreen;
