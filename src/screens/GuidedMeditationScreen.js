import React from 'react';
import { Text, View } from 'react-native';
import SettingsButton from '../components/SettingsButton';



const GuidedMeditationScreen = ({navigation}) => {
    return (
        <View>
          <SettingsButton navigation={navigation} />
          <Text>Guided Meditation</Text>
        </View>
    )
};

export default GuidedMeditationScreen;
