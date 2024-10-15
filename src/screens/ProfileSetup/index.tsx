import {BlurView} from '@react-native-community/blur';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type ProfileSetupProps = {};

const ProfileSetup: React.FC<ProfileSetupProps> = ({navigation, route}) => {
  const [data, setData] = useState<string>('');
  const datas = ['1', '1', '1', '1', '1', '1'];
  const {height, width} = Dimensions.get('window');
  const generatedImage =
    'https://media.discordapp.net/attachments/1064647966708731974/1295409659909505154/jashan_shetty_manequiene_in_fashion_designer_clothes_in_crazy_s_1aad8ebe-7e70-4893-8868-c7a9850263e9.png?ex=670e8bc2&is=670d3a42&hm=c2abbc7eb0eeb8a08c3cf30de1ab17927eafa0466c5a3f73a8a5e06c240c0c6a&=&format=webp&quality=lossless&width=700&height=700';
  const renderImageUpload = () => (
    <Text
      style={{
        fontSize: 18,
        color: 'white',
        alignItems: 'center',
        fontWeight: '700',
        textAlign: 'center',
      }}>
      Upload your best snapshot so our AI can genrate try-on to
    </Text>
  );
  return (
    <SafeAreaView style={styles.container}>
      <Image
        src={generatedImage}
        style={[StyleSheet.absoluteFillObject, {width: width, height: height}]}
      />
      <BlurView
        blurAmount={50}
        blurType="regular"
        style={StyleSheet.absoluteFillObject}
      />
      {renderImageUpload()}
      <TouchableOpacity
        style={{
          width: '90%',
          padding: 12,
          backgroundColor: '#fff',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 12,
          borderRadius: 50,
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowRadius: 12,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
          Try Virtual-Try-On 👔🧥👚
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // paddingBottom: 30,
  },
});

export default ProfileSetup;
