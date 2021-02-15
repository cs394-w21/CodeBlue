import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const SignUpQuestion = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Don't have an account?  </Text>
            <Text style={styles.signUpText}>Sign up</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: '5%'
    }, 
    text: {
        fontSize : 15,
    },
    signUpText: {
        color: '#223fd4',
        fontSize: 15,
    }
})

export default SignUpQuestion;