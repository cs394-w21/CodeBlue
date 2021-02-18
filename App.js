import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from './src/screens/SignInScreen';
import HomeScreen from './src/screens/HomeScreen';
import ThemeScreen from './src/screens/ThemeScreen';
import ControlScreen from './src/screens/ControlScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator style={styles.container1}>
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown: false}} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="ThemeScreen" component={ThemeScreen} options={{headerShown: false}} />
        <Stack.Screen name="ControlScreen" component={ControlScreen} options={{headerShown: false}} />
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
