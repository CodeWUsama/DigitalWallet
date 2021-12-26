import {StyleSheet} from 'react-native';

const SignupStyles = StyleSheet.create({
  logoWrapper: {
    alignItems: 'center',
    marginTop: 30,
  },
  FormWrapper: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    height: 350,
    justifyContent:"space-between"
  },
  textOr: {
    color: "white",
    fontSize: 28,
    textAlign:"center"
  },
  remainingHeightContainer:{
    flex:1,
    justifyContent:"space-between"
  }
});

export default SignupStyles;
