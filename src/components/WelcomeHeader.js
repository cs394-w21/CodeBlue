import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts, Raleway_800ExtraBold } from '@expo-google-fonts/raleway';

let font = 'sans-serif';

const WelcomeHeader = () => {
    const [fontsLoaded] = useFonts({
        Raleway_800ExtraBold
    });
    if (fontsLoaded) {
        font = 'Raleway_800ExtraBold'
    }
    return (
        <View style={styles.header}>
            <Text style={styles.text}>mybeacon</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'

    },
    header: {
        backgroundColor: '#21518C',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    },
    text: {
        fontSize: 40,
        color: 'white',
        fontFamily: 'Raleway_800ExtraBold',
    }
})

export default WelcomeHeader;