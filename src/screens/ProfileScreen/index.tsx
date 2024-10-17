import React, {useState, useEffect, useRef} from 'react';
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
import {Modalize} from 'react-native-modalize';
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
    'https://cdn.midjourney.com/1aad8ebe-7e70-4893-8868-c7a9850263e9/0_0.jpeg';
  const generateModalizeRef = useRef<Modalize>(null);
  const generatedListModalizeRef = useRef<Modalize>(null);
  const onGenerateOpen = () => {
    generateModalizeRef.current?.open();
  };
  const onMyListOpen = () => {
    generatedListModalizeRef.current?.open();
  };
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
          <ProfileInfoCard
            onListModalOpen={onMyListOpen}
            image={generatedImage}
          />
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
          }}
          onPress={onGenerateOpen}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
            Try Virtual-Try-On 👔🧥👚
          </Text>
        </TouchableOpacity>
        <Modalize modalHeight={height * 0.5} ref={generateModalizeRef}>
          <View style={{flex: 1, backgroundColor: 'white'}}></View>
        </Modalize>
        <Modalize modalHeight={height * 0.7} ref={generatedListModalizeRef}>
          <View style={{flex: 1, backgroundColor: 'white'}}>
            <Text
              style={{
                fontSize: 24,
                color: 'black',
                fontWeight: 'bold',
                marginTop: 20,
                marginLeft: 16,
              }}>
              Your Virtual Runway
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'black',
                // marginTop: 6,
                marginLeft: 16,
                fontWeight: '500',
                marginBottom: 20,
                // margin: 20,
              }}>
              {`Explore your style transformations – where your wardrobe dreams come to life.`}
            </Text>

            <FlatList
              data={datas}
              numColumns={2}
              contentContainerStyle={{
                width: '100%',
                alignItems: 'center',
              }}
              renderItem={({_, index}) => <StyleCard index={index} />}
            />
          </View>
        </Modalize>
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
