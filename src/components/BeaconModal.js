import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'modal-enhanced-react-native-web';

const BeaconModal = ({isVisible, toggleModal, colors, setSelectedColor}) => {
  const handlePress = (i) => {
    setSelectedColor(colors[i])
    toggleModal()
  }

  return (
    <Modal
      isVisible={isVisible}
      style={styles.bottomModal}
      swipeDirection="left"
      onSwipe={toggleModal}
    >

      <TouchableOpacity style={styles.blank} onPress={toggleModal}></TouchableOpacity>
      <View style={styles.modeBoxes}>
        <Text style={styles.textStyle}>Pick a Beacon Color:</Text>
        <View style={styles.modeBoxesRow}>
          {colors.map((color, i) => {
            return (
              <TouchableOpacity key={i} onPress={() => handlePress(i)} style={[styles.item, {backgroundColor: `${color}`}]} />
            );
          })}
        </View>
      </View>
    </Modal>
  );
}



const styles = StyleSheet.create({
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
    alignItems: 'center'
  },
  itemText: {
    color: 'white'
  },
  item: {
    backgroundColor: '#21518C',
    height: 40,
    width: 40,
    justifyContent: 'center',
    margin: 15,
    borderRadius: 3,
    textAlign: 'center',
  },
  modeBoxes: {
    backgroundColor: 'white',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modeBoxesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  blank: {
    height: '70%'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  }
})

export default BeaconModal;
