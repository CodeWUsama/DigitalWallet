import React, {useState} from 'react';
import {KeyboardAvoidingView, Text, TouchableOpacity, View} from 'react-native';
import Button from '../../components/Button';
import HeaderBack from '../../components/HeaderBack';
import InputField, {Mode} from '../../components/InputField';
import LinearGradiant from '../../components/LinearGradiant';
import GlobalStyles from '../../components/Styles';
import {Colors} from '../../constants';
import styles from './styles';
import DatePicker from 'react-native-date-picker';
//@ts-ignore
import CalendarIcon from '../../assets/Icons/calendar.png';

const NewRecord: React.FC<any> = ({navigation}) => {
  const [label, setLabel] = useState('expense');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <LinearGradiant>
      <HeaderBack title="New Record" navigation={navigation} />
      {/* <Header title="test" navigation={navigation} /> */}
      <KeyboardAvoidingView style={{flex: 1}}>
        <View style={styles.formContainer}>
          <View style={styles.labelsContainer}>
            <Text style={GlobalStyles.textNormal}>Select Label: </Text>
            <View style={styles.labelContainer}>
              <TouchableOpacity
                onPress={() => setLabel('expense')}
                style={{
                  ...styles.badgeContainer,
                  backgroundColor:
                    label === 'expense' ? Colors.buttonColor : 'white',
                }}>
                <Text
                  style={{
                    ...GlobalStyles.textNormal,
                    color: label === 'expense' ? 'white' : 'black',
                  }}>
                  Expense
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setLabel('income')}
                style={{
                  ...styles.badgeContainer,
                  backgroundColor:
                    label === 'income' ? Colors.buttonColor : 'white',
                }}>
                <Text
                  style={{
                    ...GlobalStyles.textNormal,
                    color: label === 'income' ? 'white' : 'black',
                  }}>
                  Income
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <InputField label="Title*" />
          <InputField label="Amount (Pkr)*" />
          <InputField
            label="Date*"
            value={date.toISOString().substring(0, 10)}
            rightIcon={CalendarIcon}
            onIconTouch={() => setOpen(true)}
            disabled
            onPress={() => setOpen(true)}
          />
          <DatePicker
            modal
            mode="date"
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <InputField label="Description" height={200} />
          <Button label="Add new record" />
        </View>
      </KeyboardAvoidingView>
    </LinearGradiant>
  );
};

export default NewRecord;
