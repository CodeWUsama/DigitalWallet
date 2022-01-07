import React, {useContext, useState} from 'react';
import {KeyboardAvoidingView, Text, TouchableOpacity, View} from 'react-native';
import Button from '../../components/Button';
import HeaderBack from '../../components/HeaderBack';
import InputField, {Mode} from '../../components/InputField';
import LinearGradiant from '../../components/LinearGradiant';
import GlobalStyles from '../../components/Styles';
import {BaseUrl, Colors} from '../../constants';
import styles from './styles';
import DatePicker from 'react-native-date-picker';
//@ts-ignore
import CalendarIcon from '../../assets/Icons/calendar.png';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NewRecord: React.FC<any> = ({navigation}) => {
  // const [label, setLabel] = useState('expense');
  // const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    label: 'expense',
    amount: '',
    title: '',
    date: new Date(),
    description: '',
  });

  let handleSubmit = async () => {
    let empty = false;
    let keys = Object.keys(formData);
    let data = Object.values(formData);

    data.every((d, i) => {
      if (!d && keys[i] !== 'description') {
        empty = true;
        Toast.show({
          type: 'error',
          text1: 'Sigin Error!',
          text2: `${keys[i]} cannot be empty.`,
        });
        return false;
      } else {
        return true;
      }
    });

    if (!empty) {
      let toSend = {...formData, amount: Number.parseInt(formData.amount)};
      let res = await axios.post(BaseUrl + '/wallet', toSend, {
        headers: {
          Authorization: 'Bearer ' + (await AsyncStorage.getItem('token')),
        },
      });
      if (res.data.error) {
        return Toast.show({
          type: 'error',
          text1: 'Record Creation Error!',
          text2: res.data.message,
        });
      } else {
        Toast.show({
          type: 'success',
          text1: 'Success!',
          text2: res.data.message,
        });
      }
    }
  };

  return (
    <LinearGradiant>
      <HeaderBack title="New Record" navigation={navigation} />
      <KeyboardAvoidingView style={{flex: 1}}>
        <View style={styles.formContainer}>
          <View style={styles.labelsContainer}>
            <Text style={GlobalStyles.textNormal}>Select Label: </Text>
            <View style={styles.labelContainer}>
              <TouchableOpacity
                onPress={() => setFormData({...formData, label: 'expense'})}
                style={{
                  ...styles.badgeContainer,
                  backgroundColor:
                    formData.label === 'expense' ? Colors.buttonColor : 'white',
                }}>
                <Text
                  style={{
                    ...GlobalStyles.textNormal,
                    color: formData.label === 'expense' ? 'white' : 'black',
                  }}>
                  Expense
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setFormData({...formData, label: 'income'})}
                style={{
                  ...styles.badgeContainer,
                  backgroundColor:
                    formData.label === 'income' ? Colors.buttonColor : 'white',
                }}>
                <Text
                  style={{
                    ...GlobalStyles.textNormal,
                    color: formData.label === 'income' ? 'white' : 'black',
                  }}>
                  Income
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <InputField
            label="Title*"
            value={formData.title}
            onChange={v => setFormData({...formData, title: v})}
          />
          <InputField
            label="Amount (Pkr)*"
            onChange={v => setFormData({...formData, amount: v})}
            value={formData.amount}
            isNumeric
          />
          <InputField
            label="Date*"
            value={formData.date.toISOString().substring(0, 10)}
            rightIcon={CalendarIcon}
            onIconTouch={() => setOpen(true)}
            disabled
            onPress={() => setOpen(true)}
          />
          <DatePicker
            modal
            mode="date"
            open={open}
            date={formData.date}
            onConfirm={date => {
              setOpen(false);
              setFormData({...formData, date});
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <InputField
            label="Description"
            height={200}
            value={formData.description}
            onChange={v => setFormData({...formData, description: v})}
          />
          <Button onPress={handleSubmit} label="Add new record" />
        </View>
      </KeyboardAvoidingView>
    </LinearGradiant>
  );
};

export default NewRecord;
