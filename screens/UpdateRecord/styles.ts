import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  formContainer: {
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
    justifyContent: 'space-around',
    maxHeight: 650,
  },
  badgeContainer: {
    height: 35,
    width: 90,
    borderRadius: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 190,
    justifyContent: 'space-between',
  },
  labelsContainer: {
    height: 70,
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default Styles;
