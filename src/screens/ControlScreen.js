import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Dimensions} from 'react-native';
import {Entypo} from "@expo/vector-icons";
import Logo from '../components/Logo';

const ControlScreen = ({navigation}) => {
  const modules = [
    {title: "AROMA", mode: "Disabled"},
    {title: "AROMA", mode: "Lavender"},
    {title: "SOUND", mode: "Rain Forest"}
  ];
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('HomeScreen')}>
        <Entypo
          name="home"
          size={20}
          color="black" />
      </TouchableOpacity>
      <Logo />
      <Text style={styles.topText}>Tap on a module to adjust it</Text>
      <View style={styles.container}>
        <View style={styles.moduleContainer}>
          <View style={styles.topHardwareComponent}/>
          <View style={styles.moduleContainerText}>
            <Text>BEACON</Text>
            <Text>Emerald of Calmness</Text>
          </View>
        </View>
        {modules.map((module, i) => {
          return (
            <View key={i} style={styles.moduleContainer}>
              <View style={styles.hardwareComponent} />
              <View style={styles.moduleContainerText}>
                <Text>{module.title}</Text>
                <Text>{module.mode}</Text>
              </View>
            </View>
          );
        })}
        <View style={styles.verticalRect} />
        <View style={styles.horizontalRect} />
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
// put this in a constant ^^

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10
  },
  topText: {
    alignSelf: 'center'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 30,
  },
  moduleContainer: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'flex-start',
    width: .9 * windowWidth,
    padding: 10,
    paddingLeft: 50
  },
  moduleContainerText: {
    flexDirection: 'column',
    marginLeft: 80,
    justifyContent: 'center'
  },
  hardwareComponent: {
    height: 60,
    width: 40,
    backgroundColor: '#21518C'
  },
  topHardwareComponent: {
    height: 35,
    width: 40,
    backgroundColor: '#21518C'
  },
  homeButton: {
    height: 20,
    alignItems: 'flex-end',
    marginTop: 5,
    marginRight: 5
  },
  verticalRect: {
    height: 180,
    width: 40,
    marginTop: 20,
    marginLeft: 50,
    marginBottom: -1,
    backgroundColor: '#21518C'
  },
  horizontalRect: {
    height: 40,
    width: 140,
    backgroundColor: '#21518C'
  }
})

export default ControlScreen;
