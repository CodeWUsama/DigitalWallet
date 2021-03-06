import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import Header from '../../components/Header';
import LinearGradiant from '../../components/LinearGradiant';
import GlobalStyles from '../../components/Styles';
import WalletStyles from './styles';
//@ts-ignore
import GraphImage from './graph.png';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BaseUrl} from '../../constants';
import Dialog from '../../components/Dialog';
import {Provider, DefaultTheme} from 'react-native-paper';

const Wallet: React.FC<any> = ({navigation}) => {
  const [walletData, setWalletData] = useState({
    cash: 0,
    expense: 0,
    expenseDay: 0,
    expenseWeek: 0,
    income: 0,
  });

  const [dialogShow, setDialogShow] = useState<boolean>(false);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubscribe;
  }, [navigation]);

  let getData = async () => {
    let res = await axios.get(BaseUrl + '/wallet', {
      headers: {
        Authorization: 'Bearer ' + (await AsyncStorage.getItem('token')),
      },
    });
    if (res.data.data) {
      setWalletData(res.data.data);
    }
  };

  let handleLogout = () => {
    AsyncStorage.removeItem('token').then(res => {
      navigation.navigate('Signin');
    });
  };

  return (
    <LinearGradiant>
      <Provider theme={DefaultTheme}>
        <Dialog
          show={dialogShow}
          title="Please Confirm"
          content="Do you really want to logout from wallet?"
          onConfirm={handleLogout}
          onCancel={() => setDialogShow(false)}
        />
        <Header
          handleMenuClick={() => setDialogShow(true)}
          navigation={navigation}
          title="Wallet"
        />
        <View style={WalletStyles.cardsContainer}>
          <View
            style={{
              ...GlobalStyles.cardContainer,
            }}>
            <Text style={GlobalStyles.textCardHeading}>CASH REMAINING</Text>
            <Text style={{...GlobalStyles.textCardContent, marginBottom: 15}}>
              {walletData.cash < 0 ? 0 : walletData.cash} Rs
            </Text>

            <Text style={GlobalStyles.textCardHeading}>TOTAL SPENT TODAY</Text>
            <Text style={{...GlobalStyles.textCardContent, marginBottom: 15}}>
              {walletData.expenseDay} Rs
            </Text>

            <Text style={GlobalStyles.textCardHeading}>
              TOTAL SPENT THIS WEEK
            </Text>
            <Text style={{...GlobalStyles.textCardContent}}>
              {walletData.expenseWeek} Rs
            </Text>
          </View>

          <View style={GlobalStyles.cardContainer}>
            <Text style={GlobalStyles.textCardHeading}>INCOME THIS MONTH</Text>
            <Text style={{...GlobalStyles.textCardContent, marginBottom: 15}}>
              {walletData.income} Rs
            </Text>

            <Text style={GlobalStyles.textCardHeading}>EXPENSE THIS MONTH</Text>
            <Text style={{...GlobalStyles.textCardContent, marginBottom: 15}}>
              {walletData.expense} Rs
            </Text>

            <Image source={GraphImage} style={{height: 135, width: 300}} />
          </View>
        </View>
      </Provider>
    </LinearGradiant>
  );
};

export default Wallet;
