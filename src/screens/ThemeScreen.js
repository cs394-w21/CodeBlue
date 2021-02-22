import React, {createContext, useContext} from 'react';
import {ScrollView, SafeAreaView, Text, View, FlatList, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import SettingsButton from '../components/SettingsButton';
import {useFonts, Raleway_800ExtraBold} from '@expo-google-fonts/raleway';

import CreateThemeScreen from './CreateThemeScreen';
import firebase from '../firebase';
import UserContext from '../../UserContext';


let font = 'sans-serif';

const db = firebase.database().ref();

const ThemeScreen = ({navigation}) => {
  const user = useContext(UserContext);
  const [fontsLoaded] = useFonts({
    Raleway_800ExtraBold
  });
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
      style={[styles.item, {backgroundColor: `${color}`}]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity >
  );
  const renderItem = ({item}) => (
    <Item title={item.title} color={item.color} />
  );
  return (
    <View>
      <SettingsButton navigation={navigation} />
      <SafeAreaView style={styles.container}>
        <Text style={styles.logo}>mybeacon</Text>
        <Text style={styles.textStyle}>Hi {user.name},</Text>
        <Text style={styles.textBold}>how would you like to feel?</Text>
        <View style={styles.themeBoxes}>
          <FlatList
            data={user.themeList}
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

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  item: {
    //backgroundColor: '#21518C',
    height: 70,
    width: .8 * windowWidth,
    justifyContent: 'center',
    marginTop: 15,
    borderRadius: 10,

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
    fontFamily: 'Raleway_800ExtraBold',
    fontSize: 15,
    color: '#21518c',
    marginBottom: 20
  },
})


export default ThemeScreen;
