import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Wallet from '../wallet';
import {Image} from 'react-native';
//@ts-ignore
import WalletIcon from '../../assets/Icons/wallet-transparent.png';
//@ts-ignore
import HistoryIcon from '../../assets/Icons/history.png';
import {Colors} from '../../constants';
import History from '../History';

const Tab = createMaterialBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      barStyle={{backgroundColor: Colors.base}}
      initialRouteName="Wallet"
      activeColor="white"
      shifting
      >
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: () => (
            <Image source={WalletIcon} style={{height: 25, width: 25}} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: () => (
            <Image source={HistoryIcon} style={{height: 25, width: 25}} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
