import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  tabsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemsContainer: {
    marginTop: 30,
    marginBottom: 30,
  },
  itemDetailsContainer: {
    display: 'flex',
    marginTop: 5.5,
    marginBottom: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 5,
  },
  leftCont: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Styles;
