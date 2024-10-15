import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
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
        <Text style={{fontSize: 20, color: 'black', fontWeight: 800}}>
          Kristin Watson
        </Text>
        <Text style={{fontSize: 16, color: 'black', fontWeight: 400}}>
          @kristin_watson
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: 'black',
            fontWeight: 400,
            marginTop: 8,
          }}>
          🌟 Style is a way to say who you are without speaking.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 12,
            borderTopWidth: 0.5,
            borderBottomWidth: 0.5,
            borderColor: '#9E9EA7',
            paddingVertical: 12,
          }}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 12,
                color: 'black',
                fontWeight: 800,
              }}>
              800
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'black',
                fontWeight: 400,
              }}>
              Styles generated
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 12,
                color: 'black',
                fontWeight: 800,
              }}>
              10
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'black',
                fontWeight: 400,
              }}>
              Credits left
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 12,
                color: 'black',
                fontWeight: 800,
              }}>
              0
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'black',
                fontWeight: 400,
              }}>
              Coins earned
            </Text>
          </View>
        </View>
        {/* <View
          style={{
            flexDirection: 'row',
            width: '30%',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 12,
          }}>
          <Icon name="pinterest" size={20} color="white" />
          <Icon name="instagram" size={20} color="white" />
          <Icon name="twitter" size={20} color="white" />
        </View> */}
      </View>
      <TouchableOpacity
        style={{
          width: '90%',
          padding: 8,
          borderColor: '#fff',
          borderWidth: 1,
          alignItems: 'center',
          alignSelf: 'center',
          borderRadius: 50,
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowRadius: 12,
        }}>
        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>
          Check my styles 👔🧥👚
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    // height: 200,
    width: '100%',
    // borderRadius: 12,
    backgroundColor: 'gray',
    alignSelf: 'center',
    paddingBottom: 20,
    // marginVertical: 8,
    // overflow: 'hidden',
  },
});

export default ProfileInfoCard;
