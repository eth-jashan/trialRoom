import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen/index';
import AuthScreen from '../screens/AuthScreen/index';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

function WelcomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}

export default WelcomeNavigator;
