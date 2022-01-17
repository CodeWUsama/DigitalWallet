import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import LinearGradiant from '../../components/LinearGradiant';
import Logo from '../../components/Logo';
import GlobalStyles from '../../components/Styles';
import SplashScreenStyles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BaseUrl} from '../../constants';
import Toast from 'react-native-toast-message';
import NetInfo from '@react-native-community/netinfo';

const SplashScreen: React.FC<any> = ({navigation}) => {
  useEffect(() => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        AsyncStorage.getItem('token').then(token => {
          if (token) {
            validateToken(token);
          } else {
            setTimeout(() => {
              navigation.navigate('Signin');
            }, 2000);
          }
        });
      } else {
        return Toast.show({
          type: 'error',
          text1: 'Internet connection failed!',
          text2: 'This app requires internet to work.',
        });
      }
    });
  }, []);

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
        console.log('Token validation error');
        navigation.navigate('Signin');
        return;
      } else {
        console.log('Token validation success');
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
