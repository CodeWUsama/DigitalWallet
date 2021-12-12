import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Wallet from '../../assets/Icons/wallet.png';

const Logo = () => {
  return (
    <View style={Styles.container}>
      <Image style={Styles.image} source={Wallet} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  image: {
    height: 96,
    width: 96,
  },
});

export default Logo;
