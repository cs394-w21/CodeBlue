import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import SwitchToggle from "react-native-switch-toggle";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { enableScreens } from "react-native-screens";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { BookOpen } from "react-native-feather";

import ThemeScreen from './ThemeScreen';
import ControlScreen from './ControlScreen';
import JournalScreen from './JournalScreen';

const Tab = createBottomTabNavigator();
enableScreens();

const HomeScreen = ({ navigation }) => {
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
        //children={() => <ThemeScreen navigation={navigation}/>}
        component={ThemeScreen}
        options={({ navigation }) => ({
          title: "Themes",
          tabBarIcon: () => (
            <FontAwesome5 name={'user-cog'} size={20} solid />
          ),
        })}
      />
      <Tab.Screen
        name="JournalScreen"
        //children={() => <ControlScreen navigation={navigation}/>}
        component={JournalScreen}
        options={({ navigation }) => ({
          title: "Journal",
          tabBarIcon: () => (
            <BookOpen width={23} height={23} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};


export default HomeScreen;
