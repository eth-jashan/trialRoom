import {BlurView} from '@react-native-community/blur';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

type AuthScreenProps = {};

const AuthScreen: React.FC<AuthScreenProps> = ({navigation, route}) => {
  const [data, setData] = useState();

  const stylePreferences = [
    'Casual Chic 👚 \n*Relaxed yet stylish everyday wear*',
    'Bohemian 🌻 \n*Free-spirited and artistic*',
    'Minimalist ⚪ \n*Clean lines and simple elegance*',
    'Vintage 🕰️ \n*Inspired by past decades*',
    'Glamorous ✨ \n*Luxurious and eye-catching*',
    'Sporty 🏃‍♀️ \n*Athletic and comfortable*',
    'Preppy 🏫 \n*Classic and polished*',
    'Edgy 🖤 \n*Bold and unconventional*',
    'Business Professional 💼 \n*Sleek and office-appropriate*',
  ];

  const {height, width} = Dimensions.get('window');

  const generatedImage =
    'https://cdn.midjourney.com/1aad8ebe-7e70-4893-8868-c7a9850263e9/0_0.jpeg';

  const renderImageUpload = () => (
    <View>
      <Text
        style={{
          fontSize: 20,
          color: 'white',
          alignItems: 'center',
          fontWeight: '700',
          textAlign: 'center',
        }}>
        {`Upload your best snapshot so our\n AI can genrate try-on to`}
      </Text>
      <Image
        source={{
          uri: 'https://cdn.midjourney.com/1aad8ebe-7e70-4893-8868-c7a9850263e9/0_0.jpeg',
        }}
        style={{
          width: width * 0.8,
          height: height / 2,
          resizeMode: 'cover',
          borderWidth: 3,
          borderColor: 'white',
          marginVertical: 20,
        }}
      />
      <Text
        style={{
          fontSize: 12,
          color: 'black',
          alignItems: 'center',
          fontWeight: 'light',
          textAlign: 'center',
        }}>
        {`We are the best and fastest try-it-on out there`}
      </Text>
      <TouchableOpacity
        style={{
          width: width * 0.8,
          padding: 12,
          backgroundColor: '#fff',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 12,
          borderRadius: 12,
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowRadius: 12,
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
          Upload a Snap 📸
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderStylePicker = () => (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 20,
          color: 'white',
          alignItems: 'center',
          fontWeight: '700',
          textAlign: 'center',
          marginTop: 12,
        }}>
        {`Style Signature`}
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: '#E1E1E1',
          alignItems: 'center',
          fontWeight: 'light',
          textAlign: 'center',
          marginBottom: 20,
          width: width * 0.7,
        }}>
        {`Pick your favorite styles to personalize your virtual try-on experience.`}
      </Text>
      <FlatList
        data={stylePreferences}
        renderItem={({item}) => (
          <View
            style={{
              width: width * 0.7,
              padding: 8,
              borderRadius: 8,
              marginBottom: 10,
              overflow: 'hidden',
              // backgroundColor: 'white',
            }}>
            <BlurView
              blurAmount={50}
              blurType="regular"
              style={StyleSheet.absoluteFillObject}
            />
            <Text
              style={{
                fontSize: 14,
                color: 'black',
                alignItems: 'center',
                fontWeight: '500',
                textAlign: 'center',
              }}>
              {item?.split('\n')[0]}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'black',
                alignItems: 'center',
                fontWeight: '300',
                fontStyle: 'italic',
                textAlign: 'center',
              }}>
              {item?.split('\n')[1]}
            </Text>
          </View>
        )}
      />
      <TouchableOpacity
        style={{
          width: width * 0.8,
          padding: 12,
          backgroundColor: '#fff',
          alignItems: 'center',
          alignSelf: 'center',
          marginBottom: 12,
          borderRadius: 12,
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowRadius: 12,
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, {height: height}]}>
      <Image
        src={generatedImage}
        style={[StyleSheet.absoluteFillObject, {width: width, height: height}]}
      />
      <BlurView
        blurAmount={50}
        blurType="regular"
        style={StyleSheet.absoluteFillObject}
      />
      <Text
        style={{
          fontSize: 20,
          color: 'white',
          fontWeight: '700',
          textAlign: 'center',
          color: 'black',
          marginTop: 12,
        }}>
        {`Hello there`}
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: '#E1E1E1',
          alignItems: 'center',
          fontWeight: 'light',
          textAlign: 'center',
          marginBottom: 20,
          // width: width * 0.7,
          color: 'black',
        }}>
        {`Create your account to personalize your virtual try-on experience.`}
      </Text>
      <TextInput
        mode="outlined"
        label="Email"
        placeholder="Email"
        theme={{
          colors: {primary: 'white'},
        }}
        selectionColor={'white'}
        outlineColor={'gray'}
        style={{
          backgroundColor: 'transparent',
        }}
        // underlineStyle={{backgroundColor: 'transparent'}}
      />
      <TextInput
        mode="outlined"
        label="Password"
        placeholder="Password"
        theme={{
          colors: {primary: 'white'},
        }}
        secureTextEntry
        selectionColor={'white'}
        outlineColor={'gray'}
        style={{
          backgroundColor: 'transparent',
        }}
        // underlineStyle={{backgroundColor: 'transparent'}}
      />
      <TouchableOpacity
        style={{
          width: width * 0.8,
          padding: 12,
          backgroundColor: '#fff',
          alignItems: 'center',
          alignSelf: 'center',
          marginBottom: 12,
          borderRadius: 12,
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowRadius: 12,
          marginTop: 24,
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
          Signup 🔐
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },
});

export default AuthScreen;
