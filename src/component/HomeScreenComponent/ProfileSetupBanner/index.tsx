import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {View, Image, StyleSheet, ImageBackground} from 'react-native';

interface ProfileSetupBannerProps {
  // title: string;
}

const ProfileSetupBanner: React.FC<ProfileSetupBannerProps> = () => {
  return (
    // <BlurView blurAmount={55} blurType="regular" style={styles.bannerContainer}>
    <ImageBackground
      style={styles.bannerContainer}
      src={
        'https://i.pinimg.com/736x/f7/96/82/f79682ac2fbe9c0035cd66bba9c0a508.jpg'
      }>
      <BlurView
        blurAmount={20}
        blurType="regular"
        style={StyleSheet.absoluteFillObject}
      />
    </ImageBackground>
    // </BlurView>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    height: 200,
    width: '98%',
    borderRadius: 12,
    backgroundColor: 'gray',
    alignSelf: 'center',
    marginVertical: 8,
    overflow: 'hidden',
  },
});

export default ProfileSetupBanner;
