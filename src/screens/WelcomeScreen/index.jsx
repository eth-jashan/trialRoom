import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {colors} from '../../theme/colors';
import Icon from 'react-native-vector-icons/AntDesign';

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../../assets/background.jpg')}
      style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <View style={styles.topContent}>
          <View style={styles.iconTileWrapper}>
            <Text style={styles.bigBoldText}>Trial</Text>
            <Text style={styles.bigLightText}> Room</Text>
          </View>
          <View style={styles.iconTileWrapper}>
            <Text style={[styles.bigMidText, {fontSize: 14,marginLeft:10}]}>
              Your Closet's New Best Friend
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('MainFlow')}
            style={[styles.button, {backgroundColor: colors.white}]}>
            <Text style={[styles.buttonText, {color: colors.black}]}>
              Sign in with Instagram
            </Text>
            <Icon size={24} name="instagram" color={colors.black} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('MainFlow')}
            style={[styles.button, {backgroundColor: colors.black}]}>
            <Text style={[styles.buttonText, {color: colors.white}]}>
              Sign in with Phone Number
            </Text>
            <Icon size={24} name="phone" color={colors.white} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 32,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
  },
  topContent: {
    marginTop: '20%',
  },
  bigLightText: {fontWeight: '200', color: colors.white, fontSize: 48},
  bigBoldText: {fontWeight: 'bold', color: colors.white, fontSize: 48},
  bigMidText: {fontWeight: '400', color: colors.white, fontSize: 48},
  iconTileWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 20, // Add space at the bottom
  },
  button: {
    width: '100%',
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16, // Add space between buttons
  },
  buttonText: {fontWeight: '500', fontSize: 18},
});

export default WelcomeScreen;
