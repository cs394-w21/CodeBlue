import React, { useState } from 'react';
import { Switch, TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native';
import { Entypo } from "@expo/vector-icons";

import Logo from '../components/Logo';
import ModuleModal from '../components/ModuleModal';
import BeaconModal from '../components/BeaconModal';
import { withSafeAreaInsets } from 'react-native-safe-area-context';


const ControlScreen = ({ route, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleBeacon, setModalVisibleBeacon] = useState(false);
  const { color } = route.params;

  const modes = ['#ce51c6', '#72b583', '#eac752', '#569ac5', '#72bbe2', '#c59cd6', '#64b6b3', '#e2a862', '#9242b7', '#da3a7d'];


  [{ title: "excited", color: "#ce51c6" },
  { title: "chill", color: "#72b583" },
  { title: "happy", color: "#eac752" },
  { title: "focused", color: "#569ac5" },
  { title: "calm", color: "#72bbe2" },
  { title: "relaxed", color: "#c59cd6" },
  { title: "motivated", color: "#64b6b3" },
  { title: "energized", color: "#e2a862" },
  { title: "empowered", color: "#9242b7" },
  { title: "romantic", color: "#da3a7d" }];

  const modules = [
    { title: "AROMA 1", modes: ["Disabled", "Enabled"] },
    { title: "AROMA 2", modes: ["Disabled", "Enabled"] },
    { title: "SOUND", modes: ["Disabled", "Rain Forest", "Rainfall", "Breeze"] }
  ];
  const [selectedValues, setSelectedValues] = useState(["Disabled", "Disabled", "Disabled"]);
  const [selectedModule, setSelectedModule] = useState(modules[2]);
  const [selectedColor, setSelectedColor] = useState(color);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  }
  const toggleModalBeacon = () => {
    setModalVisibleBeacon(!modalVisibleBeacon);
  }

  const handlePress = ({ title, modes, i }) => {
    if (modes.length == 2) {
      var temp = selectedValues
      if (selectedValues[i] == "Disabled") {
        temp[i] = "Enabled"
      }
      else {
        temp[i] = "Disabled"
      }
      setSelectedValues([...temp]);
    }
    else {
      setModalVisible(true);
      setSelectedModule({ title, modes });
    }
  }


  const handlePressBeacon = ({ title, modes }) => {
    setModalVisibleBeacon(true);
  }

  //onPress={() => handlePressBeacon({title, modes})}

  const title = 'beacon';

  return (

    <View style={styles.mainContainer}>
      <ModuleModal isVisible={modalVisible} toggleModal={toggleModal} module={selectedModule} selectedValues={selectedValues} setSelectedValues={setSelectedValues} />
      <BeaconModal isVisible={modalVisibleBeacon} toggleModal={toggleModalBeacon} colors={modes} setSelectedColor={setSelectedColor} />
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() =>
          navigation.navigate('HomeScreen')}>
        <Entypo
          name="home"
          size={30}
          color="black" />
      </TouchableOpacity>
      <Logo />
      <View style={styles.content}>
        <View style={styles.container}>
          <View style={styles.moduleContainer}>
            <TouchableOpacity style={[styles.topHardwareComponent, { backgroundColor: `${selectedColor}` }]} />
            <View style={styles.lineTop} />
            <View style={styles.topCircle} />
            <View style={styles.moduleContainerText}>
              <Text>LIGHT</Text>
            </View>
          </View>
          {modules.map((module, i) => {
            const title = module.title;
            const modes = module.modes;
            return (
              <View key={i} style={styles.moduleContainer}>
                <TouchableOpacity style={[styles.hardwareComponent, { backgroundColor: `${selectedColor}` }]} />
                <View style={styles.line} />
                <View style={styles.circle} />
                <View style={styles.moduleContainerText}>
                  <Text>{module.title}</Text>
                  <Text>{selectedValues[i]}</Text>
                </View>
              </View>
            );
          })}
          <View style={[styles.verticalRect, { backgroundColor: `${selectedColor}` }]} />
          <View style={[styles.horizontalRect, { backgroundColor: `${selectedColor}` }]} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => handlePressBeacon({ title, modes })}>
            <Text style={styles.buttonText}>LIGHT</Text>
          </TouchableOpacity>
          {modules.map((module, i) => {
            const title = module.title;
            const modes = module.modes;
            return (
              <View key={i} >
                <TouchableOpacity style={styles.buttonStyle} onPress={() => handlePress({ title, modes, i })}>
                  <Text style={styles.buttonText}>{module.title}</Text>
                </TouchableOpacity>
              </View>

            );
          })}

        </View>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
// put this in a constant ^^

const boxHeight = 30;
const boxWidth = 20;
const smallBoxHeight = 17.5;

const styles = StyleSheet.create({
  homeButton: {
    alignItems: 'flex-end',
  },
  buttonStyle: {
    width: windowWidth * .85,
    height: windowHeight * .1,
    backgroundColor: '#dbdbdb',
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    marginTop: 10,
  },
  buttonText: {
    color: '#444',
    fontSize: 15,
  },
  circle: {
    borderRadius: "50%",
    backgroundColor: "red",
    width: 5,
    height: 5,
    marginTop: boxHeight * .5 - 3
  },
  topCircle: {
    borderRadius: "50%",
    backgroundColor: "red",
    width: 5,
    height: 5,
    marginTop: smallBoxHeight * .5 - 3
  },
  line: {
    borderBottomColor: "Black",
    borderBottomWidth: 1,
    width: 100,
    height: boxHeight * .5,
    marginLeft: -10,
    marginRight: 0,
    paddingRight: 0,
  },
  lineTop: {
    borderBottomColor: "Black",
    borderBottomWidth: 1,
    width: 100,
    height: smallBoxHeight * .5,
    marginLeft: -10,
    marginRight: 0,
    paddingRight: 0,
  },
  mainContainer: {
    padding: 10
  },
  topText: {
    alignSelf: 'center',
    color: "grey"

  },
  // content: {
  //   borderColor: 'black',
  //   borderWidth: 2,
  //   height: '100%'
  // },
  container: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 30,
  },
  moduleContainer: {
    flexDirection: 'row',
    marginTop: 0,
    justifyContent: 'flex-start',
    width: .9 * windowWidth,
    padding: 10,
    paddingLeft: 50
  },
  moduleContainerText: {
    flexDirection: 'column',
    marginLeft: 10,
    justifyContent: 'center'
  },
  hardwareComponent: {
    height: boxHeight,
    width: boxWidth,
    backgroundColor: '#21518C'
  },
  topHardwareComponent: {
    height: smallBoxHeight,
    width: boxWidth,
    backgroundColor: '#21518C'
  },
  homeButton: {
    height: 20,
    alignItems: 'flex-end',
    marginTop: 5,
    marginRight: 5
  },
  verticalRect: {
    height: boxHeight * 2,
    width: boxWidth,
    marginTop: 10,
    marginLeft: 50,
    marginBottom: -1,
    backgroundColor: '#21518C'
  },
  horizontalRect: {
    height: boxWidth,
    width: 96,
    marginLeft: 12,
    backgroundColor: '#21518C'
  },
})

export default ControlScreen;
