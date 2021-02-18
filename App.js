import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import HomeScreen from './src/screens/HomeScreen';
import 'react-native-gesture-handler';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer style={styles.container}>

      <Stack.Navigator style={styles.container1}>
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={({ navigation }) => ({ headerShown: false })} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}




const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  container1: {
    height: '100%'
  }
})

export default App;
