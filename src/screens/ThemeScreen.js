import React from 'react';
import { ScrollView, Text, View, FlatList, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const ThemeScreen = () => {
    const userName = 'Ana';
    const themeList =
        [{ title: "stressed" },
        { title: "tired" },
        { title: "romantic" },
        { title: "chill" },
        { title: "melancholic" },
        { title: "energetic" }];
    const Item = ({ title }) => (
        <TouchableOpacity style={styles.item}>
            <Text >{title}</Text>
        </TouchableOpacity>
    );
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );
    return (
        <View style={styles.container}>
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
        height: '70px',
        width: .9*windowWidth,
        justifyContent: 'center',
        marginTop: '15px'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: '10px'
    },
    themeBoxes: {
        alignSelf: 'center',
        textAlign: 'center',
    }
})

export default ThemeScreen;
