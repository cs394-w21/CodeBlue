import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import { Entypo } from "@expo/vector-icons";


const SettingsScreen = ({navigation}) => {
    return (
        <View>
          <View style={styles.homeButton}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('HomeScreen')}>
              <Entypo
                name="home"
                size={20}
                color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.text}>
            <Text>Settings Go Here</Text>
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
    homeButton: {
        height: 20,
        alignItems: 'flex-end',
        marginTop: 5,
        marginRight: 5
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
    }
})

export default SettingsScreen;
