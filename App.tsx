import React from 'react';
import { StatusBar } from 'react-native';
import Signin from './screens/Signin';
import SplashScreen from './screens/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './screens/Signup';
import Wallet from './screens/wallet';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar backgroundColor="#EF8E35" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Wallet" component={Wallet} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
