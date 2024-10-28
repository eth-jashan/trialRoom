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
import auth from '@react-native-firebase/auth';

type AuthScreenProps = {};

const AuthScreen: React.FC<AuthScreenProps> = ({navigation, route}) => {
  const [data, setData] = useState();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const authenticate = () => {
    try {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
          navigation.navigate('MainFlow');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
          console.error(error);
        });
    } catch (err) {
      console.log(err);
    }
  };
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
    'https://i.pinimg.com/originals/c1/a8/22/c1a822e6691df80d2f23b3671b640bef.jpg';

  return (
    <SafeAreaView style={[styles.container, {height: height}]}>
      <Image
        src={generatedImage}
        blurRadius={3}
        style={[StyleSheet.absoluteFillObject, {width: width, height: height}]}
      />
      {/* <BlurView
        blurAmount={50}
        blurType="regular"
        style={StyleSheet.absoluteFillObject}
      /> */}
      <Text
        style={{
          fontSize: 20,
          color: 'black',
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
        onChangeText={setEmail}
        mode="outlined"
        placeholder="Email"
        value={email}
        theme={{
          colors: {primary: 'black'},
        }}
        selectionColor={'black'}
        outlineColor={'black'}
        style={{
          backgroundColor: 'transparent',
          marginBottom: 10,
        }}
        // underlineStyle={{backgroundColor: 'transparent'}}
      />
      <TextInput
        onChangeText={setPassword}
        mode="outlined"
        value={password}
        placeholder="Password"
        theme={{
          colors: {primary: 'black'},
        }}
        secureTextEntry
        selectionColor={'black'}
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
        }}
        onPress={authenticate}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
          Signup 🔐
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },
});

export default AuthScreen;
