import React from 'react';
import {Text, View} from 'react-native';
import Button from '../Button';
import styles from './styles';
//@ts-ignore
import Menu from '../../assets/Icons/menu.png';
//@ts-ignore
import AddCircle from '../../assets/Icons/add-circle.png';
import IconButton from '../IconButton';
import GlobalStyles from '../Styles';

const Header: React.FC<CompProps> = ({title}) => {
  return (
    <View style={styles.RootContainer}>
      <IconButton size={40} icon={Menu} />
      <Text style={GlobalStyles.textMedium}>{title}</Text>
      <IconButton size={40} icon={AddCircle} />
    </View>
  );
};

interface CompProps {
  title: string;
}

export default Header;
