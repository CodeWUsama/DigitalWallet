import React, {useContext, useEffect, useState} from 'react';
import {Appearance, Text, View} from 'react-native';
import LinearGradiant from '../../components/LinearGradiant';
import Logo from '../../components/Logo';
import GlobalStyles from '../../components/Styles';
import SplashScreenStyles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BaseUrl} from '../../constants';

const SplashScreen: React.FC<any> = ({navigation}) => {
  useEffect(() => {
    AsyncStorage.getItem('token').then(token => {
      if (token) {
        validateToken(token);
      } else {
        setTimeout(() => {
          navigation.navigate('Signin');
        }, 2000);
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
