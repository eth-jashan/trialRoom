import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Header from '../../component/common/Header';
import StyleCard from '../../component/common/StyleCard';
import {SafeAreaView} from 'react-native-safe-area-context';
// import ProfileSetupBanner from '../../component/ProfileScreenComponent/ProfileInfoCard';
import OOTDCarousel from '../../component/ProfileScreenComponent/OOTDCarousel';
import ProfileInfoCard from '../../component/ProfileScreenComponent/ProfileInfoCard';
// import ProfileSetupBanner from '../../component/ProfileScreenComponent/ProfileInfoCard';

// Assuming you have a RootStackParamList defined in your navigation setup
type RootStackParamList = {
  MyScreen: {someParam: string};
  // Add other screens here
};

type MyScreenProps = NativeStackScreenProps<RootStackParamList, 'MyScreen'>;

const MyScreen: React.FC<MyScreenProps> = ({navigation, route}) => {
  const [data, setData] = useState<string>('');
  const datas = ['1', '1', '1', '1', '1', '1'];
  const {height, width} = Dimensions.get('window');
  const generatedImage =
    'https://media.discordapp.net/attachments/1064647966708731974/1295409659909505154/jashan_shetty_manequiene_in_fashion_designer_clothes_in_crazy_s_1aad8ebe-7e70-4893-8868-c7a9850263e9.png?ex=670e8bc2&is=670d3a42&hm=c2abbc7eb0eeb8a08c3cf30de1ab17927eafa0466c5a3f73a8a5e06c240c0c6a&=&format=webp&quality=lossless&width=700&height=700';
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          src={generatedImage}
          style={[
            StyleSheet.absoluteFillObject,
            {width: width, height: height},
          ]}
        />
        <View style={{marginTop: height * 0.5}}>
          <ProfileInfoCard image={generatedImage} />
        </View>
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
        {/* <FlatList
          data={datas}
          numColumns={2}
          contentContainerStyle={{
            width: '100%',
            alignItems: 'center',
          }}
          // ListHeaderComponent={() => (
          //   <View style={{marginTop: '70%'}}>
          //     <ProfileInfoCard
          //       image={
          //         'https://images.squarespace-cdn.com/content/v1/50aa7079e4b040d142112688/1521037439197-MNF07W0FOSJ2ENGHO53O/JakeHicksPhotography+%283+of+5%29.jpg'
          //       }
          //     />
          //   </View>
          // )}
          renderItem={({_, index}) => <StyleCard index={index} />}
        /> */}
      </ScrollView>
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

export default MyScreen;
