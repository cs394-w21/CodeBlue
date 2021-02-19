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
        height: '20px',
        alignItems: 'flex-end',
        marginTop: '5px',
        marginRight: '5px'
    }
})

export default SettingsButton;
