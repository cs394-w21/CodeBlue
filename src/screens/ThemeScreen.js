import React, {createContext, useContext, useState, useEffect} from 'react';
import {ScrollView, SafeAreaView, Text, View, FlatList, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import BeaconButton from '../components/BeaconButton';
import {useFonts, Raleway_800ExtraBold} from '@expo-google-fonts/raleway';

import CreateThemeScreen from './CreateThemeScreen';
import firebase from '../firebase';
import UserContext from '../../UserContext';
import Logo from '../components/Logo'

let font = 'sans-serif';

const db = firebase.database().ref();

const ThemeScreen = ({navigation}) => {
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

  const themeList =
    [{title: "excited", color: "#ce51c6"},
    {title: "chill", color: "#72b583"},
    {title: "happy", color: "#eac752"},
    {title: "focused", color: "#569ac5"},
    {title: "calm", color: "#72bbe2"},
    {title: "relaxed", color: "#c59cd6"},
    {title: "motivated", color: "#64b6b3"},
    {title: "energized", color: "#e2a862"},
    {title: "empowered", color: "#9242b7"},
    {title: "romantic", color: "#da3a7d"}];

  if (fontsLoaded) {
    font = 'Raleway_800ExtraBold'
  }
  const handlePress = () => {
    navigation.navigate('ControlScreen');
  }
  const createNewTheme = () => {
    navigation.navigate('CreateThemeScreen');
  }
  const Item = ({title, color}) => (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.item, {backgroundColor: `${color}`, width: windowWidth * 0.45}]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity >
  );
  const renderItem = ({item}) => (
    <Item title={item.title} color={item.color} />
  );
  return (
    <View>
      <BeaconButton navigation={navigation} />
      <SafeAreaView style={styles.container}>
        <Logo />
        <Text style={styles.textStyle}>Hi {user ? user.name : 'there'},</Text>
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
    </View>
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
    color: 'grey'
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
