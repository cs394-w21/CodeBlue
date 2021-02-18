import React from 'react';
import {ScrollView, Text, View, FlatList, StyleSheet, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useFonts, Raleway_600SemiBold} from '@expo-google-fonts/raleway';

let font = 'sans-serif';

const ThemeScreen = () => {
  const [fontsLoaded] = useFonts({
    Raleway_600SemiBold
  });
  if (fontsLoaded) {
    font = 'Raleway_600SemiBold'
  }

  const userName = 'Ana';
  const themeList =
    [{title: "stressed"},
    {title: "tired"},
    {title: "romantic"},
    {title: "chill"},
    {title: "melancholic"},
    {title: "energetic"}];
  const Item = ({title}) => (
    <TouchableOpacity style={styles.item}>
      <Text >{title}</Text>
    </TouchableOpacity>
  );
  const renderItem = ({item}) => (
    <Item title={item.title} />
  );
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MyBeacon</Text>
      <Text>Hi {userName},</Text>
      <Text>how are you feeling?</Text>
      <View style={styles.themeBoxes}>
        <FlatList
          data={themeList}
          renderItem={renderItem}
          keyExtractor={item => item.title}
        />
      </View>
    </View>
  )
};

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#e0e0e0',
    height: 70,
    width: .9 * windowWidth,
    justifyContent: 'center',
    marginTop: 15
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 10
  },
  themeBoxes: {
    alignSelf: 'center',
    textAlign: 'center',
  },
  logo: {
    fontFamily: font,
    fontSize: '2.3em',
    color: '#21518c'
  }
});

export default ThemeScreen;
