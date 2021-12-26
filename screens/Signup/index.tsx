import React from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import LinearGradiant from '../../components/LinearGradiant';
import Logo from '../../components/Logo';
import GlobalStyles from '../../components/Styles';
import styles from './styles';
//@ts-ignore
import GoogleIcon from '../../assets/Icons/google.png';

const Signup: React.FC<any> = ({ navigation }) => {
  return (
    <LinearGradiant>
      <View style={styles.logoWrapper}>
        <Logo />
        <Text style={{ ...GlobalStyles.textLarge, marginTop: 30 }}>Sign Up</Text>
      </View>
      <View style={styles.remainingHeightContainer}>
        <KeyboardAvoidingView>
          <View style={styles.FormWrapper}>
            <InputField label="Full name" />
            <InputField label="Email" />
            <InputField label="Password" />
            <InputField label="Confirm Password" />
            <Button label="SIGN UP" />
          </View>
        </KeyboardAvoidingView>
        <View style={{ ...GlobalStyles.rowContainer, marginBottom: 10, justifyContent: "center" }}>
          <Text style={GlobalStyles.textNormal}>Already have account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <Text style={{ ...GlobalStyles.textNormal, textDecorationLine: "underline" }}>Signin now </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradiant>
  );
};

export default Signup;
