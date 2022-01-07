import React, {useEffect, useState} from 'react';
import {Keyboard, SafeAreaView, StatusBar, View} from 'react-native';
import Signin from './screens/Signin';
import SplashScreen from './screens/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from './screens/Signup';
import Tabs from './screens/Tabs';
import {Colors} from './constants';
import NewRecord from './screens/AddNewRecord';
import Toast from 'react-native-toast-message';

export const KeyboardContext = React.createContext({});

const App = () => {
  //constants
  ///////////
  const Stack = createNativeStackNavigator();

  //states
  ////////
  const [keyboardStatus, setKeyboardStatus] = useState<boolean>(false);

  //contexts
  ////////

  //useEffects
  ////////////
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <KeyboardContext.Provider value={keyboardStatus}>
      <View style={{backgroundColor: Colors.base}}>
        <SafeAreaView>
          <StatusBar backgroundColor={Colors.base} />
        </SafeAreaView>
      </View>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="NewRecord" component={NewRecord} />
          <Stack.Screen name="Tabs" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </KeyboardContext.Provider>
  );
};

export default App;
