import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import LinearGradiant from '../../components/LinearGradiant';
import Logo from '../../components/Logo';
import GlobalStyles from '../../components/Styles';
import SplashScreenStyles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BaseUrl} from '../../constants';

const SplashScreen: React.FC<any> = ({navigation}) => {
  const [token, setToken] = useState<string>('');

  let getToken = async () => {
    let t = await AsyncStorage.getItem('token');
    if (t) setToken(t);
  };

  useEffect(() => {
    getToken();
    if (token) {
      validateToken(token);
    }
  }, [token]);

  let validateToken = async (token: string) => {
    try {
      let res = await axios.post(
        BaseUrl + '/validateToken',
        {},
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        },
      );
      if (res.data.error) {
        navigation.navigate('Signin');
        return;
      } else {
        navigation.navigate('Tabs');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <LinearGradiant>
      <View style={SplashScreenStyles.logoWrapper}>
        <View style={SplashScreenStyles.gapWrapper}>
          <Logo />
          <Text style={GlobalStyles.textLarge}>Digital Wallet</Text>
          <Text style={SplashScreenStyles.tagLine}>
            ONE STOP FOR EVERYDAY WALLET MANAGEMENT NEEDS
          </Text>
        </View>
      </View>
    </LinearGradiant>
  );
};

export default SplashScreen;
