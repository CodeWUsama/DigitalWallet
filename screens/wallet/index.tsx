import React from 'react';
import {Image, Text, View} from 'react-native';
import Header from '../../components/Header';
import LinearGradiant from '../../components/LinearGradiant';
import GlobalStyles from '../../components/Styles';
import WalletStyles from './styles';
//@ts-ignore
import GraphImage from './graph.png';
import {BottomNavigation} from 'react-native-paper';

const Wallet = () => {
  return (
    <LinearGradiant>
      <Header title="Wallet" />
      <View style={WalletStyles.cardsContainer}>
        <View style={GlobalStyles.cardContainer}>
          <Text style={GlobalStyles.textCardHeading}>CASH REMAINING</Text>
          <Text style={{...GlobalStyles.textCardContent, marginBottom: 15}}>
            3990 Rs
          </Text>

          <Text style={GlobalStyles.textCardHeading}>TOTAL SPENT TODAY</Text>
          <Text style={{...GlobalStyles.textCardContent, marginBottom: 15}}>
            330 Rs
          </Text>

          <Text style={GlobalStyles.textCardHeading}>
            TOTAL SPENT THIS WEEK
          </Text>
          <Text style={{...GlobalStyles.textCardContent}}>3310 Rs</Text>
        </View>

        <View style={GlobalStyles.cardContainer}>
          <Text style={GlobalStyles.textCardHeading}>INCOME THIS MONTH</Text>
          <Text style={{...GlobalStyles.textCardContent, marginBottom: 15}}>
            3990 Rs
          </Text>

          <Text style={GlobalStyles.textCardHeading}>EXPENSE THIS MONTH</Text>
          <Text style={{...GlobalStyles.textCardContent, marginBottom: 15}}>
            330 Rs
          </Text>

          <Image source={GraphImage} style={{height: 135, width: 300}} />
        </View>
      </View>
    </LinearGradiant>
  );
};

export default Wallet;
