import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
//@ts-ignore
import Logout from '../../assets/Icons/logout.png';
//@ts-ignore
import AddCircle from '../../assets/Icons/add-circle.png';
import IconButton from '../IconButton';
import GlobalStyles from '../Styles';

const Header: React.FC<CompProps> = ({title, navigation, handleMenuClick}) => {
  return (
    <View style={styles.RootContainer}>
      <IconButton
        onPress={handleMenuClick}
        color="white"
        size={35}
        icon={Logout}
      />
      <Text style={GlobalStyles.textMedium}>{title}</Text>
      <IconButton
        size={40}
        icon={AddCircle}
        onPress={() => navigation.navigate('NewRecord')}
      />
    </View>
  );
};

interface CompProps {
  title: string;
  navigation: any;
  handleMenuClick?: () => void;
}

export default Header;
