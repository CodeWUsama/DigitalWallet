import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Header from '../../components/Header';
import LinearGradiant from '../../components/LinearGradiant';
import GlobalStyles from '../../components/Styles';
import styles from './styles';
//@ts-ignore
import ArrowUp from '../../assets/Icons/arrow-up.png';
//@ts-ignore
import ArrowDown from '../../assets/Icons/arrow-down.png';

const Item: React.FC<ItemProps> = ({type, amount, title, date}) => {
  return type === 'income' ? (
    <View style={styles.itemContainer}>
      <View style={styles.leftCont}>
        <Image source={ArrowUp} />
        <View style={styles.itemDetailsContainer}>
          <Text style={GlobalStyles.textNormalBlack}>{title}</Text>
          <Text style={{...GlobalStyles.textSmallBlack}}>{date}</Text>
        </View>
      </View>
      <Text style={{...GlobalStyles.textNormalBlack, color: 'green'}}>
        +{amount} Rs
      </Text>
    </View>
  ) : (
    <View style={styles.itemContainer}>
      <View style={styles.leftCont}>
        <Image source={ArrowDown} />
        <View style={styles.itemDetailsContainer}>
          <Text style={GlobalStyles.textNormalBlack}>{title}</Text>
          <Text style={{...GlobalStyles.textSmallBlack}}>{date}</Text>
        </View>
      </View>
      <Text style={{...GlobalStyles.textNormalBlack, color: 'red'}}>
        -{amount} Rs
      </Text>
    </View>
  );
};

const History: React.FC<any> = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState<string>('week');
  return (
    <LinearGradiant>
      <Header navigation={navigation} title="History" />
      <View style={GlobalStyles.cardContainer}>
        <View style={styles.tabsContainer}>
          <TouchableOpacity onPress={() => setSelectedTab('week')}>
            <Text
              style={{
                ...GlobalStyles.textNormal,
                color: 'black',
                fontWeight: selectedTab === 'week' ? 'bold' : 'normal',
              }}>
              This Week
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab('month')}>
            <Text
              style={{
                ...GlobalStyles.textNormal,
                color: 'black',
                fontWeight: selectedTab === 'month' ? 'bold' : 'normal',
              }}>
              This Month
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab('year')}>
            <Text
              style={{
                ...GlobalStyles.textNormal,
                color: 'black',
                fontWeight: selectedTab === 'year' ? 'bold' : 'normal',
              }}>
              This Year
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.itemsContainer}>
          <Item
            type="income"
            title="Monthly Salary"
            date="23 October 2021"
            amount={2333}
          />
          <Item
            type="expense"
            title="Monthly Salary"
            date="23 October 2021"
            amount={2333}
          />
          <Item
            type="income"
            title="Monthly Salary"
            date="23 October 2021"
            amount={2333}
          />
          <Item
            type="expense"
            title="Monthly Salary"
            date="23 October 2021"
            amount={2333}
          />
          <Item
            type="expense"
            title="Monthly Salary"
            date="23 October 2021"
            amount={2333}
          />
          <Item
            type="income"
            title="Monthly Salary"
            date="23 October 2021"
            amount={2333}
          />
          <Item
            type="expense"
            title="Monthly Salary"
            date="23 October 2021"
            amount={2333}
          />
        </ScrollView>
      </View>
    </LinearGradiant>
  );
};

interface ItemProps {
  type: string;
  title: string;
  date: string;
  amount: number;
}

export default History;
