import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const WelcomeHeader = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Welcome</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
        
    },
    header: {
        backgroundColor: '#4E2A84',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    }, 
    text: {
        fontSize : 40,
        color: 'white'
    }
})

export default WelcomeHeader;