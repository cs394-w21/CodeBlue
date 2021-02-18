import React from 'react';
import { ScrollView, Text, View, FlatList, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const ThemeScreen = () => {
    const userName = 'Ana';
    const themeList =
        [{ title: "stressed" },
        { title: "tired" },
        { title: "romantic" },
        { title: "chill" }];
    const Item = ({ title }) => (
        <TouchableOpacity style={styles.item}>
            <Text >{title}</Text>
        </TouchableOpacity>
    );
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );
    return (
        < View>
            <Text>Hi {userName},</Text>
            <Text>how are you feeling?</Text>
            <FlatList
                data={themeList}
                renderItem={renderItem}
                keyExtractor={item => item.title}
            />
        </View>

    )

};

const styles = StyleSheet.create({
    item: {
        height: '100%',
        backgroundColor: 'grey',
        height: 50,
        width: 100
    }
})

export default ThemeScreen;
