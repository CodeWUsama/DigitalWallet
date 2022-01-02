import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import Signin from './screens/Signin';
import SplashScreen from './screens/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from './screens/Signup';
import Tabs from './screens/Tabs';
import {Colors} from './constants';
import NewRecord from './screens/AddNewRecord';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
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
          <Stack.Screen name="NewRecord" component={NewRecord}/>
          <Stack.Screen name="Wallet" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
