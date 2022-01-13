import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Header from '../../components/Header';
import LinearGradiant from '../../components/LinearGradiant';
import GlobalStyles from '../../components/Styles';
import styles from './styles';
//@ts-ignore
import ArrowUp from '../../assets/Icons/arrow-up.png';
//@ts-ignore
import EditIcon from '../../assets/Icons/edit.png';
//@ts-ignore
import CloseIcon from '../../assets/Icons/close.png';
//@ts-ignore
import ArrowDown from '../../assets/Icons/arrow-down.png';
//@ts-ignore
import DeleteIcon from '../../assets/Icons/delete.png';
import axios from 'axios';
import {BaseUrl, Colors} from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import Modal from '../../components/Modal/modal';
import {Provider} from 'react-native-paper';
import IconButton from '../../components/IconButton';
import Toast from 'react-native-toast-message';
import Dialog from '../../components/Dialog';

const Item: React.FC<ItemProps> = ({
  type,
  amount,
  title,
  date,
  handlePress,
}) => {
  return type === 'income' ? (
    <TouchableOpacity onPress={handlePress}>
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
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={handlePress}>
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
    </TouchableOpacity>
  );
};

const History: React.FC<any> = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState<string>('week');
  const [records, setRecords] = useState<any>([]);
  const [modalData, setModalData] = useState({
    id: '',
    title: '',
    description: '',
    amount: '',
    label: '',
    date: new Date(),
  });
  const [showModal, setShowModal] = useState<boolean>(false);
  const [dialogShow, setDialogShow] = useState(false);

  let handleRecordPress = (
    id: string,
    title: string,
    description: string,
    date: Date,
    amount: string,
    label: string,
  ) => {
    setModalData({
      id,
      title,
      description,
      amount,
      label,
      date,
    });
    setShowModal(true);
  };

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

  let handleDeleteRecord = async () => {
    axios
      .delete(BaseUrl + '/wallet/' + modalData.id, {
        headers: {
          Authorization: 'Bearer ' + (await AsyncStorage.getItem('token')),
        },
      })
      .then(res => {
        if (res.data.error) {
          return Toast.show({
            type: 'error',
            text1: 'Record Deletion Error!',
            text2: res.data.message,
          });
        } else {
          getData();
          setShowModal(false);
          setDialogShow(false);
          return Toast.show({
            type: 'success',
            text1: 'Success!',
            text2: res.data.message,
          });
        }
      });
  };

  return (
    <Provider>
      <Dialog
        show={dialogShow}
        title="Please Confirm"
        content="Do you really want to delete the record from wallet?"
        onConfirm={handleDeleteRecord}
        onCancel={() => {
          setDialogShow(false);
          setShowModal(true);
        }}
      />
      <Modal onClose={() => setShowModal(false)} show={showModal}>
        <>
          <View
            style={{
              ...GlobalStyles.rowContainer,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={GlobalStyles.textNormalBlackBold}>
              {modalData.title}
            </Text>
            <IconButton
              color={Colors.buttonColor}
              icon={CloseIcon}
              size={16}
              onPress={() => {
                setShowModal(false);
              }}
            />
          </View>
          <Text
            style={{
              ...GlobalStyles.textSmallBlack,
              marginTop: 10,
              textAlign: 'justify',
            }}>
            {modalData.description}
          </Text>
          <View style={styles.actionsContainer}>
            <IconButton
              color={Colors.buttonColor}
              icon={EditIcon}
              onPress={() => {
                setShowModal(false);
                navigation.navigate('UpdateRecord', {
                  ...modalData,
                });
              }}
            />
            <IconButton
              color={Colors.buttonColor}
              icon={DeleteIcon}
              onPress={() => {
                setShowModal(false);
                setDialogShow(true);
              }}
            />
          </View>
        </>
      </Modal>
      <LinearGradiant>
        <Header navigation={navigation} title="History" />
        <View
          style={{
            ...GlobalStyles.cardContainer,
            flex: 1,
            paddingLeft: 10,
            paddingRight: 10,
          }}>
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
                    id={record._id}
                    key={record._id}
                    type={record.label}
                    title={record.title}
                    date={dateF}
                    amount={record.amount}
                    handlePress={() =>
                      handleRecordPress(
                        record._id,
                        record.title,
                        record.description,
                        record.date,
                        record.amount,
                        record.label,
                      )
                    }
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
                    id={record._id}
                    type={record.label}
                    title={record.title}
                    date={dateF}
                    amount={record.amount}
                    handlePress={() =>
                      handleRecordPress(
                        record._id,
                        record.title,
                        record.description,
                        record.date,
                        record.amount,
                        record.label,
                      )
                    }
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
                    id={record._id}
                    key={record._id}
                    type={record.label}
                    title={record.title}
                    date={dateF}
                    amount={record.amount}
                    handlePress={() =>
                      handleRecordPress(
                        record._id,
                        record.title,
                        record.description,
                        record.date,
                        record.amount,
                        record.label,
                      )
                    }
                  />
                );
              })
            ) : (
              <></>
            )}
          </ScrollView>
        </View>
      </LinearGradiant>
    </Provider>
  );
};

interface ItemProps {
  id: string;
  type: string;
  title: string;
  date: string;
  amount: number;
  handlePress: () => void;
}

export default History;
