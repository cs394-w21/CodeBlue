import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Picker, TextInput, Dimensions, TouchableOpacity } from 'react-native';

import BeaconButton from '../components/BeaconButton';
import Logo from '../components/Logo';

const JournalScreen = ({ navigation }) => {
  const [journalEntry, onChangeText] = useState((''))
  const [windowWidth, setWindowWidth] = useState(Dimensions.get("window").width);
  const [windowHeight, setWindowHeight] = useState(Dimensions.get("window").height);
  const [mood, setMood] = useState('');

  const moodList = ['I am feeling...', 'energized', 'angry', 'stressed', 'relaxed', 'calm', 'excited', 'worried', 'motivated', 'focused', 'melancholic'];

  useEffect(() => {
    function handleResize() {
      setWindowWidth(Dimensions.get("window").width);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowHeight(Dimensions.get("window").height);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function submitJournal() {
    return 0;
  }

  return (
    <View >
      <BeaconButton navigation={navigation} />
      <View style={styles.logo}>
        <Logo />
        <Text style={styles.textStyle}>My Diary</Text>
      </View>
      <View style={styles.container}>
        <Picker
          selectedValue={mood}
          style={styles.moodPicker}
          onValueChange={(moodValue, moodIndex) => setMood(moodValue)}
        >
          {moodList.map((moodVal, i) => {
            return (
              <Picker.Item label={moodVal} value={moodVal} key={i} />
            )
          })}
        </Picker>
        <TextInput
          style={[styles.textInput, { width: windowWidth * .8, height: windowHeight * .65 }]}
          onChangeText={text => onChangeText(text)}
          value={journalEntry}
          multiline={true}
          placeholder='Dear diary...'
        />
        <TouchableOpacity onPress={submitJournal} style={styles.submitBtn}>
          <Text style={styles.submitBtnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  logo: {
    padding: 10,
  },
  textStyle: {
    fontSize: 25,
    color: '#707070',
    fontWeight: 'bold'
  },
  textInput: {
    borderColor: '#3e3e3e',
    borderWidth: 1,
    borderRadius: 3,
    padding: 5
  },
  submitBtn: {
    backgroundColor: '#21518c',
    borderRadius: 10,
    padding: 10,
    borderColor: 'black',
    margin: 5
  },
  submitBtnText: {
    color: 'white'
  },
  moodPicker: {
    alignSelf: 'flex-start',
    marginLeft: 18,
    marginBottom: 8
  }
})

export default JournalScreen;
