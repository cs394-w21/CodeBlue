import React, {useContext, createContext, useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import firebase from './src/firebase';
import UserContext from './UserContext';
import ControlScreen from './src/screens/ControlScreen';

const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState({});
  const [auth, setAuth] = useState();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((auth) => {
      setAuth(auth);
    });
  }, []);

  useEffect(() => {
    if (auth && auth.uid) {
      const db = firebase.database().ref('users').child(auth.uid);
      const handleData = (snap) => {
        setUser({
          uid: auth.uid, ...snap.val(),
          name: auth.displayName
        });
      }

      db.on('value', handleData, error => alert(error));
      return () => {db.off('value', handleData);};
    }
    else {
      setUser(null);
    }
  }, [auth]);


  return (
    <UserContext.Provider value={user}>
      <NavigationContainer style={styles.container}>

        <Stack.Navigator style={styles.container1}>
          <Stack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown: false}} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{title: 'Sign Up'}} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={({navigation}) => ({headerShown: false})} />
          <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{headerShown: false}} />
          <Stack.Screen name="ControlScreen" component={ControlScreen} options={{headerShown: false}} />
        </Stack.Navigator>

      </NavigationContainer>
    </UserContext.Provider>
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
