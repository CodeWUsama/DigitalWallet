import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Button from '../../components/Button';
import Toast from 'react-native-toast-message';
import InputField from '../../components/InputField';
import LinearGradiant from '../../components/LinearGradiant';
import Logo from '../../components/Logo';
import GlobalStyles from '../../components/Styles';
import styles from './styles';
//@ts-ignore
import GoogleIcon from '../../assets/Icons/google.png';
import axios from 'axios';
import {BaseUrl} from '../../constants';
import {KeyboardContext} from '../../App';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signin: React.FC<any> = ({navigation}) => {
  const keyboardEnabled = useContext(KeyboardContext);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  let handleSubmit = async () => {
    let empty = false;
    let keys = Object.keys(formData);
    let data = Object.values(formData);

    data.every((d, i) => {
      if (!d) {
        empty = true;
        Toast.show({
          type: 'error',
          text1: 'Sigin Error!',
          text2: `${keys[i]} cannot be empty.`,
        });
        return false;
      } else {
        return true;
      }
    });

    if (!empty) {
      let res = await axios.post(BaseUrl + '/login', formData);
      if (res.data.error) {
        Toast.show({
          type: 'error',
          text1: 'Sigin Error!',
          text2: res.data.message,
        });
      } else {
        await AsyncStorage.setItem('token', res.data.token);
        Toast.show({
          type: 'success',
          text1: res.data.message,
          text2: 'Redirecting to wallet...',
        });
        setTimeout(() => {
          navigation.navigate('Tabs');
        }, 3000);
      }
    }
  };

  return (
    <LinearGradiant>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <View style={styles.logoWrapper}>
          {!keyboardEnabled && <Logo />}
          <Text style={{...GlobalStyles.textLarge, marginTop: 30}}>
            Sign in
          </Text>
        </View>
        <View style={styles.remainingHeightContainer}>
          <View style={styles.FormWrapper}>
            <InputField
              label="Email"
              onChange={v => setFormData({...formData, email: v})}
              value={formData.email}
            />
            <InputField
              label="Password"
              onChange={v => setFormData({...formData, password: v})}
              value={formData.password}
              secureTextEntry={true}
            />
            <Button onPress={handleSubmit} label="SIGN IN" />
            <Text style={styles.textOr}>OR</Text>
            <Button icon={GoogleIcon} label="SIGN IN WITH GOOGLE" />
          </View>
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
              marginBottom: 15,
            }}>
            Signup now{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradiant>
  );
};

export default Signin;
