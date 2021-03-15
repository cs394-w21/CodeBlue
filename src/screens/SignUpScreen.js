import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Form from '../components/Form';
import * as Yup from 'yup';
import firebase from '../firebase';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Please enter a valid email')
    .email()
    .label('Email'),
  password: Yup.string()
    .required()
    .min(6, 'Password must have at least 6 characters')
    .label('Password'),
  name: Yup.string()
    .required()
    .min(2, 'Name must be at least 2 characters long')
    .label('Name'),
  confirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Confirmation password must match password'),
});

const SignUpScreen = ({navigation}) => {
  const [signInError, setSignInError] = useState('');

  const themeList =
    [{title: "excited", color: "#ce51c6", buttonText: "Feel Excitement", description: "Excitement is a feeling and mood full of activity, joy, exhilaration and upheaval.\n\nAromatherapy: Blend of Grapefruit, Bergamot and Lemon\nLight Status: Red\nPlaying: Beach Waves"},
    {title: "chill", color: "#72b583", buttonText: "Chill Out", description: "By finding balance in your everyday life, you can bring so much positivity and light to your current mood\n\nAromatherapy: Blend of Clove, Patchouli, Sandalwood\nLight Status: Green\nPlaying: Japanese Garden"},
    {title: "happy", color: "#eac752", buttonText: "Be Happy", description: "The key to being happy is knowing you have the power to choose what to accept and what to let go\n\nAromatherapy: Rose\nLight Status: Blend of Reds\nPlaying: Love is in the air"},
    {title: "focused", color: "#27D507", buttonText: "Get Focused", description: "The secret of change is to focus all your energy, not on fighting the old, but on building the new\n\nAromatherapy: Blend of Wintergreen, Rosemary and Peppermint\nLight Status: Lime Green\nPlaying: Soothing Sounds"},
    {title: "calm", color: "#72bbe2", buttonText: "Calm Down", description: "A calm heart is always less stressful. Free your mind and heart from anxiety, anger and have peace within your soul\n\nAromatherapy: Blend of Lavender\nLight Status: Blue\nPlaying: Nature Waves"},
    {title: "relaxed", color: "#c59cd6", buttonText: "Get Relaxed", description: "To relax means to liberate the mind, the body, or both.  Relaxing can quiet your mind, make you feel peaceful and live in the present moment. Take a deep breath, and enjoy life\n\nAromatherapy: Grapefruit\nPlaying: Peaceful Waterfall"},
    {title: "motivated", color: "#64b6b3", buttonText: "Get Motivated", description: "Motivation reflects something unique about each one of us and allows us to gain valued outcomes like improved performance, enhanced well-being, personal growth, and a sense of purpose\n\nAromatherapy: Bergamont, Tangeringe, LIme\nLight Status: Cyan\nPlaying: Morning Glory"},
    {title: "energized", color: "#e2a862", buttonText: "Find Energy", description: "Energize means to feel enthusiasm and determination to do something. The higher your energy level, the more efficient your body and the better you feel\n\nAromatherapy: Frankincense\nLight Status: Orange\nPlaying: Feeling Strong"},
    {title: "empowered", color: "#9242b7", buttonText: "Find Strength", description: "Empowerment reflects something unique about each one of us and allows us to gain valued outcomes like improved performance, enhanced well-being, personal growth, and a sense of purpose\n\nAromatherapy: Bergamont, Tangeringe, and Lime\nLight Status: Purple\nPlaying: Winners Circle"},
    {title: "romantic", color: "#da3a7d", buttonText: "Yes Please", description: "Romance is a powerful force that makes you feel connected. You always gain by giving love\n\nAromatherapy: Rose\nLight Status: Pink\nPlaying: Love is in the Air"}];

  const [themes, setThemes] = useState({themeList});

  async function handleOnSignUp(values) {

    const {name, email, password} = values;
    setSignInError(null);
    try {
      const authCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const user = authCredential.user;
      await user.updateProfile({displayName: name});
      const db = firebase.database().ref(`users/${user.uid}/`);
      db.set(themes);
      navigation.navigate('HomeScreen');
    } catch (error) {
      setSignInError(error.message);
    }
  }

  return (
    <SafeAreaView>
      <SafeAreaView style={styles.form}>
        <Form
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
            name: ''
          }}
          validationSchema={validationSchema}
          onSubmit={handleOnSignUp}
        >
          <Form.Field
            name="email"
            leftIcon="email"
            placeholder="Enter email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <Form.Field
            name="password"
            leftIcon="lock"
            placeholder="Enter password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
          />
          <Form.Field
            name="confirmPassword"
            leftIcon="lock"
            placeholder="Confirm password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
          />
          <Form.Field
            name="name"
            leftIcon="circle"
            placeholder="Enter name"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Form.Button title='Sign Up' />
          {<Form.ErrorMessage error={signInError} visible={true} />}
        </Form>
      </SafeAreaView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  form: {
    width: '85%',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: '10%'
  },
});

export default SignUpScreen;
