import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const ControlScreen = () => {
  const modules = [
    {title: "BEACON", mode: "Emerald of Calmness"},
    {title: "AROMA", mode: "Disabled"},
    {title: "AROMA", mode: "Lavender"},
    {title: "SOUND", mode: "Rain Forest"}
  ]
    return (
      <View>
        <View style={styles.container}>
          {modules.map((module, i) => {
            return(
              <View key={i} style={styles.moduleContainer}>
                <View style={styles.hardwareComponent}/>
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
    marginLeft: '30px'
  },
  moduleContainer: {
    flexDirection: 'row',
    marginTop: '30px',
    justifyContent: 'flex-start',
    width: .9*windowWidth,
    padding: '10px'
  },
  moduleContainerText: {
    flexDirection: 'column',
    marginLeft: '80px',
    justifyContent: 'center'
  },
  hardwareComponent: {
    height: '100px',
    width: '40px',
    backgroundColor: 'grey'
  }
})

export default ControlScreen;
