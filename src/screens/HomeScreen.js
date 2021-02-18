import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import SwitchToggle from "react-native-switch-toggle";
import { FontAwesome } from "@expo/vector-icons";
import ThemeScreen from './ThemeScreen';
import ControlScreen from './ControlScreen';
import GuidedMeditationScreen from './GuidedMeditationScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { enableScreens } from "react-native-screens";
import { Entypo } from "@expo/vector-icons";


const Tab = createBottomTabNavigator();
enableScreens();

const HomeScreen = () => {
  const [BeaconStatus, setBeaconStatus] = useState(true);
  const [switchOn, setSwitchOn] = useState(true);

  const onSwitchPress = () => {
    setSwitchOn(switchOn ? false : true);
  }

  return (
    <Tab.Navigator
      tabBarOptions={{ showIcon: true }}
      initialRouteName="ThemeScreen"
    >
      <Tab.Screen
        name="ThemeScreen"
        component={ThemeScreen}
        options={{
          title: "Themes",
          tabBarIcon: () => (
            <Entypo name="images" size={20} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="ControlScreen"
        component={ControlScreen}
        options={{
          title: "Controls",
          tabBarIcon: () => (
            <Entypo name="images" size={20} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="GuidedMeditationScreen"
        component={GuidedMeditationScreen}
        options={{
          title: "Guided Meditation",
          tabBarIcon: () => (
            <Entypo name="images" size={20} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};


export default HomeScreen;
