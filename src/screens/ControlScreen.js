import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const ControlScreen = ({ navigation }) => {
  const modules = [
    { title: "BEACON", mode: "Emerald of Calmness" },
    { title: "AROMA", mode: "Disabled" },
    { title: "AROMA", mode: "Lavender" },
    { title: "SOUND", mode: "Rain Forest" }
  ]
  return (
    <View>
      <View style={styles.container}>
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
      </View>
    </View>
  )
};

const windowWidth = Dimensions.get("window").width;
// put this in a constant ^^

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 30
  },
  moduleContainer: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'flex-start',
    width: .9 * windowWidth,
    padding: 10
  },
  moduleContainerText: {
    flexDirection: 'column',
    marginLeft: 80,
    justifyContent: 'center'
  },
  hardwareComponent: {
    height: 100,
    width: 40,
    backgroundColor: 'grey'
  }
})

export default ControlScreen;
