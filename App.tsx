import React, {useEffect, useState} from 'react';
import {
  Appearance,
  Keyboard,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import Signin from './screens/Signin';
import SplashScreen from './screens/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from './screens/Signup';
import Tabs from './screens/Tabs';
import {Colors} from './constants';
import NewRecord from './screens/AddNewRecord';
import Toast from 'react-native-toast-message';
import UpdateRecord from './screens/UpdateRecord';
import NetInfo from '@react-native-community/netinfo';

//contexts
////////
export const KeyboardContext = React.createContext({});
export const ThemeContext = React.createContext({});
export const InternetContext = React.createContext({});

const App = () => {
  //constants
  ///////////
  const Stack = createNativeStackNavigator();
  const colorScheme = Appearance.getColorScheme();

  //states
  ////////
  const [keyboardStatus, setKeyboardStatus] = useState<boolean>(false);
  const [theme, setTheme] = useState(colorScheme);
  const [isConnected, setIsConnected] = useState(false);
  //useEffects
  ////////////
  useEffect(() => {
    Appearance.addChangeListener(colorScheme => {
      if (colorScheme.colorScheme === 'dark') {
        setTheme('dark');
      } else if (colorScheme.colorScheme === 'light') {
        setTheme('light');
      }
    });
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });
    NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected ?? false);
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <InternetContext.Provider value={isConnected}>
      <KeyboardContext.Provider value={keyboardStatus}>
        <ThemeContext.Provider value={theme ?? ''}>
          <View style={{backgroundColor: Colors.base}}>
            <SafeAreaView>
              <StatusBar backgroundColor={Colors.base} />
            </SafeAreaView>
          </View>
          {! isConnected ? (
            <View style={{backgroundColor: Colors.base}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Connection failed! This app requires internet connection.
              </Text>
            </View>
          ) : (
            <></>
          )}
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="Splash" component={SplashScreen} />
              <Stack.Screen name="Signin" component={Signin} />
              <Stack.Screen name="Signup" component={Signup} />
              <Stack.Screen name="NewRecord" component={NewRecord} />
              <Stack.Screen name="UpdateRecord" component={UpdateRecord} />
              <Stack.Screen name="Tabs" component={Tabs} />
            </Stack.Navigator>
          </NavigationContainer>
          <Toast />
        </ThemeContext.Provider>
      </KeyboardContext.Provider>
    </InternetContext.Provider>
  );
};

export default App;
