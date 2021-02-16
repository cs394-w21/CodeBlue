import React, {useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import SwitchToggle from "react-native-switch-toggle";
import { FontAwesome } from "@expo/vector-icons";

const HomeScreen = () => {
  const [BeaconStatus, setBeaconStatus] = useState(true);
  const [switchOn, setSwitchOn] = useState(true);

  const onSwitchPress = () => {
    setSwitchOn(switchOn ? false : true);
  }

  return (
    <ScrollView>
    <View style={styles.container}>
    <FontAwesome name="circle" size={24} color={BeaconStatus ? 'green' : 'red'} style={styles.circle}/>
    <View style={styles.filler}/>
    <SwitchToggle
      switchOn={switchOn}
      onPress={onSwitchPress}
      containerStyle={{
        marginTop: 16,
          width: 108,
          height: 48,
          borderRadius: 25,
          backgroundColor: "#ccc",
          padding: 5
      }}
      circleStyle={{
        width: 38,
          height: 38,
          borderRadius: 19,
          backgroundColor: "white" // rgb(102,134,205)
      }}
      //   switchOn={this.state.switchOn2}
      //   onPress={this.onPress2}
      circleColorOff="#e7e7e7"
      circleColorOn="#8cd653"
      duration={500}
      style={styles.toggleSwitch}
    />
    </View>
    </ScrollView>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    alignSelf: 'flex-end',
    margin: '10px',
  },
  filler: {
    flexGrow: 1
  },
  toggleSwitch: {
    alignSelf: 'center'
  }
});

export default HomeScreen;
