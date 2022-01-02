import React from 'react';
import {Text, View} from 'react-native';
import Button from '../Button';
import styles from './styles';
//@ts-ignore
import Menu from '../../assets/Icons/left-arrow.png';
//@ts-ignore
import AddCircle from '../../assets/Icons/add-circle.png';
import IconButton from '../IconButton';
import GlobalStyles from '../Styles';

const Header: React.FC<CompProps> = ({title, navigation}) => {
  return (
    <View style={styles.RootContainer}>
      <IconButton size={28} icon={Menu} onPress={() => navigation.goBack()} />
      <Text style={GlobalStyles.textMedium}>{title}</Text>
      <Text style={{opacity: 0}}>Hello</Text>
    </View>
  );
};

interface CompProps {
  title: string;
  navigation: any;
}

export default Header;
