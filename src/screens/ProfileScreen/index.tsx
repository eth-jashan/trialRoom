import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          src={
            'https://images.squarespace-cdn.com/content/v1/50aa7079e4b040d142112688/1521037439197-MNF07W0FOSJ2ENGHO53O/JakeHicksPhotography+%283+of+5%29.jpg'
          }
          // resizeMode="contain"
          style={[
            StyleSheet.absoluteFillObject,
            {width: '100%', height: '50%'},
          ]}
        />
        <View style={{marginTop: '70%'}}>
          <ProfileInfoCard
            image={
              'https://images.squarespace-cdn.com/content/v1/50aa7079e4b040d142112688/1521037439197-MNF07W0FOSJ2ENGHO53O/JakeHicksPhotography+%283+of+5%29.jpg'
            }
          />
        </View>
        <OOTDCarousel
          image={
            'https://images.squarespace-cdn.com/content/v1/50aa7079e4b040d142112688/1521037439197-MNF07W0FOSJ2ENGHO53O/JakeHicksPhotography+%283+of+5%29.jpg'
          }
        />
        {/* <FlatList
        data={datas}
        numColumns={2}
        contentContainerStyle={{
          width: '100%',
          alignItems: 'center',
        }}
        ListHeaderComponent={() => (
          <View>
            <ProfileSetupBanner />
            <OOTDCarousel />
          </View>
        )}
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
