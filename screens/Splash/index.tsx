import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import LinearGradiant from '../../components/LinearGradiant';
import Logo from '../../components/Logo';
import GlobalStyles from '../../components/Styles';
import SplashScreenStyles from './styles';

const SplashScreen: React.FC<any> = ({ navigation }) => {
  
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Signin');
    }, 1500);
  }, []);

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
