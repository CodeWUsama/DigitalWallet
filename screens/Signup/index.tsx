import axios from 'axios';
import React, {useState} from 'react';
import {View, Text, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import LinearGradiant from '../../components/LinearGradiant';
import Logo from '../../components/Logo';
import GlobalStyles from '../../components/Styles';
import {BaseUrl} from '../../constants';
import styles from './styles';
import Toast from 'react-native-toast-message';

const Signup: React.FC<any> = ({navigation}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    cPass: '',
  });

  let handleSubmit = async () => {
    if (formData.password !== formData.cPass)
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
  };

  return (
    <LinearGradiant>
      <View style={styles.logoWrapper}>
        <Logo />
        <Text style={{...GlobalStyles.textLarge, marginTop: 30}}>Sign Up</Text>
      </View>
      <View style={styles.remainingHeightContainer}>
        <KeyboardAvoidingView>
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
              onChange={v => setFormData({...formData, cPass: v})}
              value={formData.cPass}
              secureTextEntry
            />
            <Button onPress={handleSubmit} label="SIGN UP" />
          </View>
        </KeyboardAvoidingView>
        <View
          style={{
            ...GlobalStyles.rowContainer,
            marginBottom: 10,
            justifyContent: 'center',
          }}>
          <Text style={GlobalStyles.textNormal}>Already have account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <Text
              style={{
                ...GlobalStyles.textNormal,
                textDecorationLine: 'underline',
              }}>
              Signin now{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradiant>
  );
};

export default Signup;
