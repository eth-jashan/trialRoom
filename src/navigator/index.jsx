import * as React from 'react';
import {useState,useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeNavigator from './WelcomeNavigator';
import {NavigationContainer} from '@react-navigation/native';
import MainTabNavigator from './MainTabNavigator';
import ProfileSetup from '../screens/ProfileSetup';
import AuthScreen from '../screens/AuthScreen/index';
import ProfileScreen from '../screens/ProfileScreen';
import auth from '@react-native-firebase/auth';
const Stack = createNativeStackNavigator();

function AppMainNavigator() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = React.useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

    if (initializing) return null;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={!user?"Welcome":"Auth"}>
        <Stack.Screen name="Welcome" component={WelcomeNavigator} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="ProfileSetup" component={ProfileSetup} />
        <Stack.Screen name="MainFlow" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppMainNavigator;
