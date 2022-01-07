import axios from 'axios';
import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import LinearGradiant from '../../components/LinearGradiant';
import Logo from '../../components/Logo';
import GlobalStyles from '../../components/Styles';
import {BaseUrl} from '../../constants';
import styles from './styles';
import Toast from 'react-native-toast-message';
import {KeyboardContext} from '../../App';

const Signup: React.FC<any> = ({navigation}) => {
  const keyboardEnabled = useContext(KeyboardContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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
          text1: 'Sigup Error!',
          text2: `${keys[i]} cannot be empty.`,
        });
        return false;
      } else {
        return true;
      }
    });

    if (!empty) {
      if (formData.password !== formData.confirmPassword)
        return Toast.show({
          type: 'error',
          text1: 'Sigup Error!',
          text2: "Password and confirm password don't match",
        });
      let dataToSend = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };
      let res = await axios.post(BaseUrl + '/signup', dataToSend);
      if (res.data.error) {
        Toast.show({
          type: 'error',
          text1: 'Sigup Error!',
          text2: res.data.message,
        });
      } else {
        Toast.show({
          type: 'success',
          text1: res.data.message,
          text2: 'Redirecting to login...',
        });
        setTimeout(() => {
          navigation.navigate('Signin');
        }, 3000);
      }
    }
  };

  return (
    <LinearGradiant>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}
        keyboardVerticalOffset={0}>
        <View style={styles.logoWrapper}>
          {!keyboardEnabled ? <Logo /> : null}
          <Text style={{...GlobalStyles.textLarge, marginTop: 30}}>
            Sign Up
          </Text>
        </View>
        <View style={styles.remainingHeightContainer}>
          <View style={{flex: 1, justifyContent: 'space-around'}}>
            <View style={styles.FormWrapper}>
              <InputField
                label="Full name"
                onChange={v => setFormData({...formData, name: v})}
                value={formData.name}
              />
              <InputField
                label="Email"
                onChange={v => setFormData({...formData, email: v})}
                value={formData.email}
              />
              <InputField
                label="Password"
                onChange={v => setFormData({...formData, password: v})}
                value={formData.password}
                secureTextEntry
              />
              <InputField
                label="Confirm Password"
                onChange={v => setFormData({...formData, confirmPassword: v})}
                value={formData.confirmPassword}
                secureTextEntry
              />
              <Button onPress={handleSubmit} label="SIGN UP" />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
      <View
        style={{
          ...GlobalStyles.rowContainer,
          marginBottom: 10,
          justifyContent: 'center',
          marginTop: 10,
        }}>
        <Text style={GlobalStyles.textNormal}>Already have account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          <Text
            style={{
              ...GlobalStyles.textNormal,
              textDecorationLine: 'underline',
              marginBottom: 15,
            }}>
            Signin now{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradiant>
  );
};

export default Signup;
