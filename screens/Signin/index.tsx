import React from 'react';
import {View, Text, KeyboardAvoidingView} from 'react-native';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import LinearGradiant from '../../components/LinearGradiant';
import Logo from '../../components/Logo';
import GlobalStyles from '../../components/Styles';
import styles from './styles';
//@ts-ignore
import GoogleIcon from '../../assets/Icons/google.png';

const Signin = () => {
  return (
    <LinearGradiant>
      <View style={styles.logoWrapper}>
        <Logo />
        <Text style={{...GlobalStyles.textLarge, marginTop: 30}}>Sign in</Text>
      </View>
      <KeyboardAvoidingView>
        <View style={styles.FormWrapper}>
          <InputField label="Email" />
          <InputField label="Password" />
          <Button label="SIGN IN" />
          <Text style={styles.textOr}>OR</Text>
          <Button icon={GoogleIcon} label="SIGN IN WITH GOOGLE" />
        </View>
      </KeyboardAvoidingView>
    </LinearGradiant>
  );
};

export default Signin;
