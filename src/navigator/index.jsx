import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeNavigator from './WelcomeNavigator';
import {NavigationContainer} from '@react-navigation/native';
import MainTabNavigator from './MainTabNavigator';
import ProfileSetup from '../screens/ProfileSetup';
import AuthScreen from '../screens/AuthScreen';

const Stack = createNativeStackNavigator();

function AppMainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="FistTime">
        <Stack.Screen name="Auth" component={AuthScreen} />
        {/* <Stack.Screen name="ProfileSetup" component={ProfileSetup} /> */}
        <Stack.Screen name="MainFlow" component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppMainNavigator;
