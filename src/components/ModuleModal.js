import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'modal-enhanced-react-native-web';

const ModuleModal = ({ isVisible, toggleModal, module, selectedValues, setSelectedValues }) => {
    const handlePress = (mode) => {
        var temp = selectedValues
        temp[2] = mode
        setSelectedValues(temp)
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
                {module.modes.map((mode, i) => {
                    return (
                        <TouchableOpacity key={i} style={styles.item} onPress={() => handlePress(mode)}>
                            <Text style={styles.itemText}>{mode}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </Modal>
    );
}



const styles = StyleSheet.create({
    bottomModal: {
        justifyContent: "flex-start",
        margin: 0
    },
    itemText: {
        color: 'white'
    },
    item: {
        backgroundColor: '#21518C',
        height: 40,
        width: 110,
        justifyContent: 'center',
        margin: 10,
        borderRadius: 3,
        textAlign: 'center',
    },
    modeBoxes: {
        backgroundColor: 'white',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    blank: {
        height: '70%'
    }
})

export default ModuleModal;