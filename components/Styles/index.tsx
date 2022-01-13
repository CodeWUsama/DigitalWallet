import {StyleSheet} from 'react-native';

const GlobalStyles = StyleSheet.create({
  textLarge: {
    fontSize: 40,
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  textMedium: {
    fontSize: 35,
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  textMediumBlack: {
    fontSize: 35,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  textNormal: {
    color: 'white',
    fontSize: 16,
  },
  textNormalBlack: {
    color: 'black',
    fontSize: 16,
  },
  textNormalBlackBold: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textSmall: {
    color: 'white',
    fontSize: 13,
  },
  textSmallBlack: {
    color: 'black',
    fontSize: 13,
  },
  textCardContent: {
    color: 'black',
    fontSize: 20,
  },
  textCardHeading: {
    color: 'black',
    fontSize: 18,
    opacity: 0.75,
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  cardContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 20,
  },
});

export default GlobalStyles;
