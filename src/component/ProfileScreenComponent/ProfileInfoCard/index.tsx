import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {View, Image, StyleSheet, ImageBackground, Text} from 'react-native';

interface ProfileSetupBannerProps {
  // title: string;
  image: string;
}

const ProfileInfoCard: React.FC<ProfileSetupBannerProps> = ({image}) => {
  return (
    <ImageBackground style={styles.bannerContainer} src={image}>
      <BlurView
        blurAmount={50}
        blurType="regular"
        style={StyleSheet.absoluteFillObject}
      />
      <Image
        src={
          'https://media.istockphoto.com/id/491783647/photo/asian-beauty.jpg?s=612x612&w=0&k=20&c=RauwXQ-fB5L7VWjEPxPX_jSNbJZmJ9SkQkJViLNgVNk='
        }
        style={{
          height: 100,
          width: 100,
          position: 'absolute',
          top: -50,
          borderRadius: 50,
          alignSelf: 'center',
          borderWidth: 3,
          borderColor: 'white',
        }}
      />
      <View style={{alignSelf: 'center', alignItems: 'center', marginTop: 64}}>
        <Text style={{fontSize: 20, color: '#EDF0FF', fontWeight: 800}}>
          Kristin Watson
        </Text>
        <Text style={{fontSize: 16, color: '#EDF0FF', fontWeight: 400}}>
          @kristin_watson
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: '#EDF0FF',
            fontWeight: 400,
            marginTop: 8,
          }}>
          🌟 Style is a way to say who you are without speaking.
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    height: 200,
    width: '100%',
    // borderRadius: 12,
    backgroundColor: 'gray',
    alignSelf: 'center',
    // marginVertical: 8,
    // overflow: 'hidden',
  },
});

export default ProfileInfoCard;
