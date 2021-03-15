import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {enableScreens} from "react-native-screens";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {BookOpen} from "react-native-feather";

import ThemeScreen from './ThemeScreen';
import JournalScreen from './JournalScreen';

const Tab = createBottomTabNavigator();
enableScreens();


const HomeScreen = ({navigation}) => {

  return (
    <Tab.Navigator
      tabBarOptions={{showIcon: true}}
      initialRouteName="ThemeScreen"
    >
      <Tab.Screen
        name="ThemeScreen"
        component={ThemeScreen}
        options={({navigation}) => ({
          title: "Themes",
          tabBarIcon: () => (
            <FontAwesome5 name={'user-cog'} size={20} solid />
          ),
        })}
      />
      <Tab.Screen
        name="JournalScreen"
        component={JournalScreen}
        options={({navigation}) => ({
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
