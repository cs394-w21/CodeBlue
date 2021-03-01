import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'modal-enhanced-react-native-web';

const ModuleModal = ({ isVisible, toggleModal, modules}) => {
    return (
        <Modal
            isVisible={isVisible}
            style={styles.modal}
            swipeDirection="top"
            onSwipe={toggleModal}
        >
        </Modal>
    );
}

const toggleModal = () => {
    setModalVisible(!modalVisible);
  }

const styles = StyleSheet.create({
    bottomModal: {
        justifyContent: "flex-end",
        margin: 0
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        borderColor: 'black',
        margin: 5
    },
})

export default ModuleModal;