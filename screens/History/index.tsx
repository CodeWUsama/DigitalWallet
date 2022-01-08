import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Header from '../../components/Header';
import LinearGradiant from '../../components/LinearGradiant';
import GlobalStyles from '../../components/Styles';
import styles from './styles';
//@ts-ignore
import ArrowUp from '../../assets/Icons/arrow-up.png';
//@ts-ignore
import ArrowDown from '../../assets/Icons/arrow-down.png';
import axios from 'axios';
import {BaseUrl} from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

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
  const [records, setRecords] = useState<any>([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubscribe;
  }, [navigation]);

  let getData = async () => {
    let res = await axios.get(BaseUrl + '/wallet/history', {
      headers: {
        Authorization: 'Bearer ' + (await AsyncStorage.getItem('token')),
      },
    });
    if (res.data.data) {
      setRecords(res.data.data);
    }
  };

  return (
    <LinearGradiant>
      <Header navigation={navigation} title="History" />
      <View style={{...GlobalStyles.cardContainer, flex: 1}}>
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
          {selectedTab === 'week' ? (
            records.weeklyRecords?.map((record: any) => {
              let date = moment(record.date);
              let dateF = date.format('dddd, MMMM Do YYYY');
              return (
                <Item
                  key={record._id}
                  type={record.label}
                  title={record.title}
                  date={dateF}
                  amount={record.amount}
                />
              );
            })
          ) : (
            <></>
          )}
          {selectedTab === 'month' ? (
            records.monthlyRecords?.map((record: any) => {
              let date = moment(record.date);
              let dateF = date.format('dddd, MMMM Do YYYY');
              return (
                <Item
                  key={record._id}
                  type={record.label}
                  title={record.title}
                  date={dateF}
                  amount={record.amount}
                />
              );
            })
          ) : (
            <></>
          )}
          {selectedTab === 'year' ? (
            records.yearlyRecords?.map((record: any) => {
              let date = moment(record.date);
              let dateF = date.format('dddd, MMMM Do YYYY');
              return (
                <Item
                  key={record._id}
                  type={record.label}
                  title={record.title}
                  date={dateF}
                  amount={record.amount}
                />
              );
            })
          ) : (
            <></>
          )}
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
