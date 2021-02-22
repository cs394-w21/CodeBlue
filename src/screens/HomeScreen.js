import React, {useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import SwitchToggle from "react-native-switch-toggle";
import {FontAwesome} from "@expo/vector-icons";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {enableScreens} from "react-native-screens";
import {Entypo} from "@expo/vector-icons";

import ThemeScreen from './ThemeScreen';
import ControlScreen from './ControlScreen';
import GuidedMeditationScreen from './GuidedMeditationScreen';

const Tab = createBottomTabNavigator();
enableScreens();

const HomeScreen = ({navigation}) => {
  const [BeaconStatus, setBeaconStatus] = useState(true);
  const [switchOn, setSwitchOn] = useState(true);

  const onSwitchPress = () => {
    setSwitchOn(switchOn ? false : true);
  }

  return (
    <Tab.Navigator
      tabBarOptions={{showIcon: true}}
      initialRouteName="ThemeScreen"
    >
      <Tab.Screen
        name="ThemeScreen"
        //children={() => <ThemeScreen navigation={navigation}/>}
        component={ThemeScreen}
        options={({navigation}) => ({
          title: "Themes",
          tabBarIcon: () => (
            <Entypo name="images" size={20} color="black" />
          ),
        })}
      />
      <Tab.Screen
        name="ControlScreen"
        //children={() => <ControlScreen navigation={navigation}/>}
        component={ControlScreen}
        options={({navigation}) => ({
          title: "Controls",
          tabBarIcon: () => (
            <Entypo name="images" size={20} color="black" />
          ),
        })}
      />
      <Tab.Screen
        name="GuidedMeditationScreen"
        //children={() => <GuidedMeditationScreen navigation={navigation}/>}
        component={GuidedMeditationScreen}
        options={({navigation}) => ({
          title: "Guided Meditation",
          tabBarIcon: () => (
            <Entypo name="images" size={20} color="black" />
          ),
        })}
      />
    </Tab.Navigator>
  );
};


export default HomeScreen;
