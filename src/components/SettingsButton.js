import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { Entypo } from "@expo/vector-icons";


const SettingsButton = ({navigation}) => {
    return (
        <View style={styles.settings}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SettingsScreen')}>
            <Entypo
              name="cog"
              size={20}
              color="black" />
          </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    settings: {
        height: 20,
        alignItems: 'flex-end',
        marginTop: 5,
        marginRight: 5
    }
})

export default SettingsButton;
