import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../constants';
import {LinearGradiantProps} from './types';

const LinearGradiant: React.FC<LinearGradiantProps> = ({children}) => {
  return (
    <LinearGradient
      colors={[Colors.base, Colors.baseLow]}
      style={styles.linearGradient}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});

export default LinearGradiant;
