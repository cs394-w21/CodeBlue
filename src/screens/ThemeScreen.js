import React from 'react';
import { ScrollView, SafeAreaView, Text, View, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import SettingsButton from '../components/SettingsButton';
import {useFonts, Raleway_600SemiBold} from '@expo-google-fonts/raleway';


let font = 'sans-serif';


const ThemeScreen = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
    Raleway_600SemiBold
  });
  if (fontsLoaded) {
    font = 'Raleway_600SemiBold'
  }
    const userName = 'Ana';
    const themeList =
        [{ title: "energetic" },
        { title: "chill" },
        { title: "melancholic" },
        { title: "stressed" },
        { title: "tired" },
        { title: "romantic" }];
    const handlePress = () => {
        navigation.navigate('ControlScreen');
    }
    const Item = ({ title }) => (
        <TouchableOpacity
            onPress={handlePress}
            style={styles.item}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );
    return (
      <View>
        <SettingsButton navigation={navigation} />
        <SafeAreaView style={styles.container}>
            <Text style={styles.logo}>MyBeacon</Text>
            <Text style={styles.textStyle}>Hi {userName},</Text>
            <Text style={styles.textBold}>how are you feeling?</Text>
            <View style={styles.themeBoxes}>
                <FlatList
                    data={themeList}
                    renderItem={renderItem}
                    keyExtractor={item => item.title}
                />
            </View>
        </SafeAreaView>
      </View>
    )

};

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#21518C',
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
        fontSize: '2.3em',
        color: '#21518c'
    },
})


export default ThemeScreen;
