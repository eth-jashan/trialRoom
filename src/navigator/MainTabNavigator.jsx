import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';
// import BookmarkScreen from '../screens/BookMarkScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import NFTDetailScreen from '../screens/NFTDetailScreen';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {BlurView} from '@react-native-community/blur';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function HomeTabNavigator() {
  //   const bookmarkList = useSelector(x => x.bookmark.bookmarkList);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Bookmark') {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          position: 'absolute',
          height: 50,
          borderTopRightRadius: 12,
          borderTopLeftRadius: 12,
          shadowRadius: 12,
          shadowOffset: {height: 4, width: 0},
          shadowOpacity: 0.12,
          shadowColor: 'rgba(47,64,85,1)',
        },
        tabBarBackground: () => (
          // <View>
          <BlurView
            blurAmount={55}
            blurType="regular"
            style={[
              StyleSheet.absoluteFillObject,
              {
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
                backgroundColor: 'transparent',
                overflow: 'hidden',
              },
            ]}
          />
          // </View>
        ),
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarLabel: ({focused}) => (
          <View
            style={{
              width: 5,
              height: 5,
              borderRadius: 12,
              backgroundColor: focused ? 'black' : 'transparent',
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
            }}></View>
        ),
      })}>
      <Tab.Screen name="Home" component={ProfileScreen} />
      <Tab.Screen name="Bookmark" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
function MainTabNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="MainTab" component={HomeTabNavigator} /> */}
      <Stack.Screen name="MainTab" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
export default MainTabNavigator;
