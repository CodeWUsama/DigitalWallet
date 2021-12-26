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
  textNormal: {
    color: 'white',
    fontSize: 16,
  },
  textCardContent: {
    color: 'black',
    fontSize: 20,
  },
  textCardHeading: {
    color: 'black',
    fontSize: 18,
    opacity:0.75
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  cardContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
});

export default GlobalStyles;
