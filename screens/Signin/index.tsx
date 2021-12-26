import React from 'react';
import {View, Text, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import LinearGradiant from '../../components/LinearGradiant';
import Logo from '../../components/Logo';
import GlobalStyles from '../../components/Styles';
import styles from './styles';
//@ts-ignore
import GoogleIcon from '../../assets/Icons/google.png';

const Signin: React.FC<any> = ({navigation}) => {
  return (
    <LinearGradiant>
      <View style={styles.logoWrapper}>
        <Logo />
        <Text style={{...GlobalStyles.textLarge, marginTop: 30}}>Sign in</Text>
      </View>
      <View style={styles.remainingHeightContainer}>
        <KeyboardAvoidingView>
          <View style={styles.FormWrapper}>
            <InputField label="Email" />
            <InputField label="Password" />
            <Button
              onPress={() => navigation.navigate('Wallet')}
              label="SIGN IN"
            />
            <Text style={styles.textOr}>OR</Text>
            <Button icon={GoogleIcon} label="SIGN IN WITH GOOGLE" />
          </View>
        </KeyboardAvoidingView>
        <View
          style={{
            ...GlobalStyles.rowContainer,
            marginBottom: 10,
            justifyContent: 'center',
          }}>
          <Text style={GlobalStyles.textNormal}>New to Digital Wallet? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text
              style={{
                ...GlobalStyles.textNormal,
                textDecorationLine: 'underline',
              }}>
              Signup now{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradiant>
  );
};

export default Signin;
