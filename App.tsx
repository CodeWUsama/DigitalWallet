import React, {useEffect, useState} from 'react';
import {
  Appearance,
  Keyboard,
  SafeAreaView,
  StatusBar,
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

//contexts
////////
export const KeyboardContext = React.createContext({});
export const ThemeContext = React.createContext({});

const App = () => {
  //constants
  ///////////
  const Stack = createNativeStackNavigator();
  const colorScheme = Appearance.getColorScheme();

  //states
  ////////
  const [keyboardStatus, setKeyboardStatus] = useState<boolean>(false);
  const [theme, setTheme] = useState(colorScheme);

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
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <KeyboardContext.Provider value={keyboardStatus}>
      <ThemeContext.Provider value={theme ?? ''}>
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
      </ThemeContext.Provider>
    </KeyboardContext.Provider>
  );
};

export default App;
